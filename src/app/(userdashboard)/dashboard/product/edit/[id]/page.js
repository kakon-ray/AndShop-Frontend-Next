"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import { createProduct, showProduct, updateProduct } from '../../../../../../redux/features/productDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'next/navigation';
import { showUser } from '@/src/redux/features/userDetailSlice';
import { showSubcategory } from '../../../../../../redux/features/subCategoryDetailSlice';
import { showCategory } from '../../../../../../redux/features/categoryDetailSlice';

const UpdateProduct = () => {

    const [product, setProduct] = useState({});
    const dropzoneRef = useRef(null);
    const [productImage, setProductImage] = useState([]);
    const dispatch = useDispatch();
    const params = useParams();

    // start get user
    const { users } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(showUser());
    }, [dispatch]);
    // end get user

    // start get category
    const { categories } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(showCategory());
    }, [dispatch]);
    // end get category

    // start get subcategory
    const { subcategories } = useSelector((state) => state.subcategories);

    useEffect(() => {
        dispatch(showSubcategory());
    }, [dispatch]);
    // end get subcategory

    const { products } = useSelector((state) => state.products);

    const singleProduct = products?.find(item => item.id == params.id) || {};



    useEffect(() => {
        dispatch(showProduct(users?.id));
    }, [dispatch, users]);

    useEffect(() => {
        // Initialize Dropzone
        const dz = new Dropzone(dropzoneRef.current, {
            url: 'http://127.0.0.1:8000/api/upload-images', // Change this to your upload endpoint
            maxFilesize: 10, // MB
            acceptedFiles: 'image/*',
            autoProcessQueue: true,
            uploadMultiple: true,
            addRemoveLinks: true,
            parallelUploads: 10,
            init: function () {
                this.on("success", function (file, response) {
                    console.log("File uploaded successfully");
                    setProductImage(prevImages => {
                        const newImages = response.name.filter(item => !prevImages.includes(item));
                        return [...prevImages, ...newImages];
                    });
                });
                this.on("error", function (file, response) {
                    console.log("File upload error");
                });
                this.on("removedfile", function (file) {
                    setProductImage(prevImages => prevImages.filter(image => image !== file.name));

                });

                // Avoid adding duplicate images
                const addedFiles = new Set();
                if (singleProduct?.images && singleProduct?.images.length > 0) {
                    singleProduct?.images?.forEach(imageUrl => {
                        if (!addedFiles.has(imageUrl)) {
                            addedFiles.add(imageUrl);
                            let mockFile = { name: imageUrl, size: 12345 }; // Use actual file size if available
                            this.emit("addedfile", mockFile);
                            this.emit("thumbnail", mockFile, imageUrl);
                            this.emit("complete", mockFile);
                        }
                    });

                    setProductImage(singleProduct.images);

                }
            }
        });

        // Cleanup Dropzone on component unmount
        return () => {
            dz.destroy();
        };
    }, [singleProduct,params?.id]);

    const getProduct = (e) => {
        setProduct({ ...singleProduct, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        product.images = productImage.map(imageObj => {
            try {
                // Try to create a URL object to extract the pathname
                const url = new URL(imageObj);
                return url.pathname;
            } catch (error) {
                // If the URL is invalid or relative, handle it by constructing it with a base URL
                const baseUrl = window.location.origin; // or a specific base URL if needed
                try {
                    const url = new URL(imageObj, baseUrl);
                    return url.pathname;
                } catch (innerError) {
                    console.error('Invalid URL:', imageObj.url, innerError);
                    return ''; // or some default value or error handling logic
                }
            }
        });

        if (productImage.length > 1) {
            let url;
            try {
              url = new URL(productImage[1]);
            } catch (error) {
              // Handle relative URLs by constructing them with a base URL
              const baseUrl = window.location.origin; // or a specific base URL
              url = new URL(productImage[1], baseUrl);
            }
            product.thumbnail = url.pathname;
          } else {
            product.thumbnail = null; // or some default value
          }
        product.vendor_id = users?.id;
        dispatch(updateProduct(product));
        console.log(productImage)
    }

    return (
        <div className='container-fluid'>
            <ToastContainer />
            <div className="d-flex justify-content-between py-4">
                <h2>Update Product</h2>
                <Link href='/dashboard/product'>
                    <button className='btn btn-warning'>Manage Product</button>
                </Link>
            </div>

            <div className='row'>

                <div className='col-lg-12'>
                    <form onSubmit={handleSubmit}>
                        <div className="row pb-3">

                            <div className="col-lg-6 py-2">
                                <label>Product Name</label>
                                <input required type="text" className="form-control" name="name" placeholder="Product Name" defaultValue={singleProduct?.name} onChange={getProduct} />
                            </div>

                            <div className="col-lg-3 py-2">
                                <label>Category</label>
                                <select className="form-select" name="category_id" aria-label="Default select example" onChange={getProduct}>
                                    <option value="">Open this select category</option>
                                    {categories?.map(item => (
                                        <option key={item?.id} value={item?.id} selected={item?.id == singleProduct?.category_id}>
                                            {item?.category_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-lg-3 py-2">
                                <label>Sub Category</label>
                                <select className="form-select" name="subcategory_id" aria-label="Default select example" onChange={getProduct}>
                                    <option value="">Open this select category</option>
                                    {subcategories?.map(item => (
                                        <option key={item?.id} value={item?.id} selected={item?.id == singleProduct?.subcategory_id}>
                                            {item?.subcategory_name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="col-lg-3 py-2">
                                <label>Product Code </label>
                                <input required type="text" className="form-control" name="code" placeholder="Product Code" defaultValue={singleProduct?.code} onChange={getProduct} />
                            </div>

                            <div className="col-lg-3 py-2">
                                <label>Product Tags </label>
                                <input required type="text" className="form-control" name="tags" placeholder="Product Tags" defaultValue={singleProduct?.tags} onChange={getProduct} />
                            </div>
                            <div className="col-lg-3 py-2">
                                <label>Purchase Price</label>
                                <input required type="text" className="form-control" name="purchase_price" placeholder="Purchase Price" defaultValue={singleProduct?.purchase_price} onChange={getProduct} />
                            </div>

                            <div className="col-lg-3 py-2">
                                <label>Selling Price</label>
                                <input required type="text" className="form-control" name="selling_price" placeholder="Selling Price" defaultValue={singleProduct?.selling_price} onChange={getProduct} />
                            </div>

                            <div className="col-lg-3 py-2">
                                <label>Discount Price</label>
                                <input required type="text" className="form-control" name="discount_price" placeholder="Discount Price" defaultValue={singleProduct?.discount_price} onChange={getProduct} />
                            </div>

                            <div className="col-lg-3 py-2">
                                <label>Stock Quantity</label>
                                <input required type="text" className="form-control" name="stock_quantity" placeholder="Stock Quantity" defaultValue={singleProduct?.stock_quantity} onChange={getProduct} />
                            </div>

                            <div className="col-lg-12 py-2">
                                <label>Description</label>
                                <textarea name="description" className="form-control" onChange={getProduct} defaultValue={singleProduct?.description}></textarea>
                            </div>

                            <div className="col-lg-12 py-2">
                                <label>Thumbnail</label>
                                <div ref={dropzoneRef} className="dropzone"></div>
                            </div>

                        </div>

                        <button type="submit" className="btn btn-warning mb-4">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;
