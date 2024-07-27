
"use client"
import { showProduct } from '@/src/redux/features/productDetailsSlice';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ManageProduct = () => {

    const temUser = localStorage.getItem('user');
    const userid = JSON.parse(temUser)

    const dispatch = useDispatch();


    const {products} = useSelector((state) => state.products);


    useEffect(() => {
        dispatch(showProduct(userid.id))
    }, [])


    return (
        <div className='container-fluid'>
            <div className="d-flex justify-content-between py-4">
                <h2>Manage Product</h2>
                <Link href='/dashboard/product/create'>
                    <button className='btn btn-warning'>Create Product +</button>
                </Link>
            </div>
            <div className="row">
                <div class="col-lg-12 table-responsive">
                    <table id="VisitorDt" class="table table-bordered" cellspacing="0" width="100%">
                        <thead class="table-dark">
                            <tr>
                                <th class="th-sm text-center">Image</th>
                                <th class="th-sm text-center">Name</th>
                                <th class="th-sm text-center">Category</th>
                                <th class="th-sm text-center">Subcategory</th>
                                <th class="th-sm text-center">Purchase Price</th>
                                <th class="th-sm text-center">Selling Price</th>
                                <th class="th-sm text-center">Discount Price</th>
                                <th class="th-sm text-center">Stock Quantity</th>
                                <th class="th-sm text-center">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {products?.map(item => {
                                return <tr class="text-center" key={item.id}>
                                    <td class="th-sm text-center">
                                        <img src={item?.thumbnail} style={{height:'50px'}} alt="Thumbnail" />
                                    </td>
                                    <td class="th-sm text-center">{item?.name}</td>
                                    <td class="th-sm text-center">{item?.category_id}</td>
                                    <td class="th-sm text-center">{item?.subcategory_id}</td>
                                    <td class="th-sm text-center">{item?.purchase_price}</td>
                                    <td class="th-sm text-center">{item?.selling_price}</td>
                                    <td class="th-sm text-center">{item?.discount_price}</td>
                                    <td class="th-sm text-center">{item?.stock_quantity}</td>
                                    <td class="th-sm d-flex gap-3">
                                        <Link href={`/dashboard/product/edit/${item.id}`}
                                            class="btn btn-info btn-circle btn-sm">Edit</Link>
                                        <a type="button" class="btn btn-danger btn-circle btn-sm">Delete</a>
                                    </td>

                                </tr>
                            })}



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;