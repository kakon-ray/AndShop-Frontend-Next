import Link from 'next/link';
import React from 'react';


const page = () => {
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
                                <th class="th-sm text-center">Product</th>
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

                            <tr class="text-center">
                                <td class="th-sm text-center">Image</td>
                                <td class="th-sm text-center">1</td>
                                <td class="th-sm text-center">Name</td>
                                <td class="th-sm text-center">Category</td>
                                <td class="th-sm text-center">Subcategory</td>
                                <td class="th-sm text-center">Purchase Price</td>
                                <td class="th-sm text-center">Selling Price</td>
                                <td class="th-sm text-center">Discount Price</td>
                                <td class="th-sm text-center">Quantity</td>
                                <td class="th-sm d-flex gap-3">
                                    <Link href="/dashboard/product/edit"
                                        class="btn btn-info btn-circle btn-sm">Edit</Link>
                                    <a type="button" class="btn btn-danger btn-circle btn-sm">Delete</a>
                                </td>

                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default page;