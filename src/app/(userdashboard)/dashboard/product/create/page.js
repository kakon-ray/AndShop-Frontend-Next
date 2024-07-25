
"use client"
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Dropzone from 'dropzone';
import 'dropzone/dist/dropzone.css';

const AddProduct = () => {


    const dropzoneRef = useRef(null);
    let ProductImage = [];

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
                    response.name.map(item => {
                       
                        const containsItem = ProductImage.includes(item);
                        if(!containsItem){
                            ProductImage.push(item)
                        }
                    })
                    console.log(ProductImage)
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

    


    return (
        <div className='container-fluid'>

            <div className="d-flex justify-content-between py-4">
                <h2>Create Product</h2>
                <Link href='/dashboard/product'>
                    <button className='btn btn-warning'>Manage Product</button>
                </Link>
            </div>

            <div className='row'>

                <div className='col-lg-12'>
                    <form method="POST" action="" enctype="multipart/form-data">
                        <div className="row pb-3">

                            <div class="col-lg-6 py-2">
                                <label>Product Name</label>
                                <input required type="text" class="form-control" name="name" placeholder="Product Name" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Category</label>
                                <input required type="text" class="form-control" name="category_id" placeholder="Category" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Sub Category</label>
                                <input required type="text" class="form-control" name="subcategory_id" placeholder="Category" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Product Code </label>
                                <input required type="text" class="form-control" name="code" placeholder="Product Code" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Product Tags </label>
                                <input required type="text" class="form-control" name="tags" placeholder="Product Tags" />
                            </div>
                            <div class="col-lg-3 py-2">
                                <label>Purchase Price</label>
                                <input required type="text" class="form-control" name="purchase_price" placeholder="Purchase Price" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Selling Price</label>
                                <input required type="text" class="form-control" name="selling_price" placeholder="Selling Price" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Discount Price</label>
                                <input required type="text" class="form-control" name="discount_price" placeholder="Discount Price" />
                            </div>

                            <div class="col-lg-3 py-2">
                                <label>Stock Quantity</label>
                                <input required type="text" class="form-control" name="stock_quantity" placeholder="Stock Quantity" />
                            </div>


                            <div class="col-lg-3 py-2">
                                <label>Admin id</label>
                                <input required type="text" class="form-control" name="admin_id" placeholder="Admin id" />
                            </div>

                            <div class="col-lg-12 py-2">
                                <label>Description</label>
                                <textarea name="description" class="form-control" id=""></textarea>
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