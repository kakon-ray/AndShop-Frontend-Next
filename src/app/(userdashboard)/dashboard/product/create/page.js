
"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';
import { createProduct } from '../../../../../redux/features/productDetailsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showUser } from '@/src/redux/features/userDetailSlice';
import { showCategory } from '@/src/redux/features/categoryDetailSlice';
import { showSubcategory } from '@/src/redux/features/subCategoryDetailSlice';

const AddProduct = () => {

    const [product, setProduct] = useState({});
    const dropzoneRef = useRef(null);
    const [productImage, setProductImage] = useState([]);
    const dispatch = useDispatch();

    // start get user
    const { users } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(showUser())
    }, [])
    // end get user

    // start get category
    const { categories } = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(showCategory())
    }, [])
    // end get category

    // start get subcategory
    const { subcategories } = useSelector((state) => state.subcategories);

    useEffect(() => {
        dispatch(showSubcategory())
    }, [])
    // end get subcategory

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
                    // console.log(ProductImage)
                });
                this.on("error", function (file, response) {
                    console.log("File upload error");
                });
            }
        });

        // Cleanup Dropzone on component unmount
        return () => {
            dz.destroy();
        };
    }, []);

    const getProduct = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        product.images = productImage
        product.thumbnail = productImage.slice(1)[0]
        product.vendor_id = users.id
        dispatch(createProduct(product))

    }

    return (
        <div className='container-fluid'>
            <ToastContainer />
            <div className="d-flex justify-content-between py-4">
                <h2>Create Product</h2>
                <Link href='/dashboard/product'>
                    <button className='btn btn-warning'>Manage Product</button>
                </Link>
            </div>

            <div className='row'>

                <div className='col-lg-12'>
                    <form onSubmit={handleSubmit}>
                        <div className="row pb-3">

                            <div class="col-lg-6 py-2">
                                <label>Product Name</label>
                                <input required type="text" class="form-control" name="name" placeholder="Product Name" onChange={getProduct} />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Category</label>
                                <select class="form-select" name="category" aria-label="Default select example" onChange={getProduct}>
                                    <option selected>Open this select category</option>
                                    {categories?.map(item => {
                                        return <option value={item?.id} key={item?.id}>{item?.category_name}</option>
                                    })}

                                </select>
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Sub Category</label>
                                <select class="form-select" name="subcategory" aria-label="Default select example" onChange={getProduct}>
                                    <option selected>Open this select category</option>
                                    {subcategories?.map(item => {
                                        return <option value={item?.id} key={item?.id}>{item?.subcategory_name}</option>
                                    })}

                                </select>
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Product Code </label>
                                <input required type="text" class="form-control" name="code" placeholder="Product Code" onChange={getProduct} />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Product Tags </label>
                                <input required type="text" class="form-control" name="tags" placeholder="Product Tags" onChange={getProduct} />
                            </div>
                            <div class="col-lg-3 py-2">
                                <label>Purchase Price</label>
                                <input required type="text" class="form-control" name="purchase_price" placeholder="Purchase Price" onChange={getProduct} />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Selling Price</label>
                                <input required type="text" class="form-control" name="selling_price" placeholder="Selling Price" onChange={getProduct} />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Discount Price</label>
                                <input required type="text" class="form-control" name="discount_price" placeholder="Discount Price" onChange={getProduct} />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Stock Quantity</label>
                                <input required type="text" class="form-control" name="stock_quantity" placeholder="Stock Quantity" onChange={getProduct} />
                            </div>

                            <div class="col-lg-12 py-2">
                                <label>Description</label>
                                <textarea name="description" class="form-control" onChange={getProduct}></textarea>
                            </div>

                            <div class="col-lg-12 py-2">
                                <label>Thumbnail</label>
                                <div ref={dropzoneRef} className="dropzone"></div>
                            </div>


                        </div>

                        <button type="submit" class="btn btn-warning">
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;