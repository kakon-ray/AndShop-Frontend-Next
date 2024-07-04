/* eslint-disable @next/next/no-img-element */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import PageBanner from "../../../component/PageBanner/PageBanner";
import React from "react";

const page = () => {

    return (
        <>
            <PageBanner page="Cart List" />
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
        </>
    );
};

export default page;
