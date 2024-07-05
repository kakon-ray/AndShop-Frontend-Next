"use client"
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const WishList = () => {
    return (
        <div className="my-5 container-fluid cart-page">
        <div className="row table-responsive">
            <table className="table">
                <thead>
                    <tr id="table-tr-bg">
                        <th scope="col">Remove</th>
                        <th scope="col">Image</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>

                <tbody className="text-center text-justify">
                    <tr>
                        <td scope="row">
                            <FontAwesomeIcon
                                icon={faTrash}
                                size="lg"
                                className="text-danger pt-4"
                            />
                        </td>

                        <td>
                            <img
                                src='https://andshop-react.netlify.app/static/media/product10.d71c44ec.png'
                                alt=""
                                style={{ width: "80px", height: "80px" }}
                            />
                        </td>
                        <td>
                            <p className="mt-4">Title One</p>
                        </td>
                        <td>
                            <p className="mt-4">500 tk</p>
                        </td>
                    </tr>
                    <tr>
                        <td scope="row">
                            <FontAwesomeIcon
                                icon={faTrash}
                                size="lg"
                                className="text-danger pt-4"
                            />
                        </td>

                        <td>
                            <img
                                src='https://andshop-react.netlify.app/static/media/product10.d71c44ec.png'
                                alt=""
                                style={{ width: "80px", height: "80px" }}
                            />
                        </td>
                        <td>
                            <p className="mt-4">Title One</p>
                        </td>
                        <td>
                            <p className="mt-4">500 tk</p>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
    );
};

export default WishList;