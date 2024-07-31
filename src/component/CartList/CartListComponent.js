/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect } from 'react';
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartList, showCartList, updateCartList } from '@/src/redux/features/cartDetailSlice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartListComponent = ({ products }) => {


    const dispatch = useDispatch();

    const { cartlist } = useSelector((state) => state.cartlist);

    useEffect(() => {
        dispatch(showCartList())
    }, [dispatch])



    const handleChangeSinglePost = (quantity, product_id, id) => {

        const productPrice = products.find(item => item.id === product_id);
        console.log(productPrice.selling_price)

        if (productPrice) {
            const price = parseFloat(productPrice.selling_price) * parseFloat(quantity);
            const data = { quantity, id, price }
            dispatch(updateCartList(data));
        }
    };

    const handleDeleteCartList = (id) => {
        dispatch(deleteCartList(id));
    };


    let totalCartListPrice = 0;
    let shipping = 5;
    
    cartlist.forEach(element => {
        totalCartListPrice = parseFloat(totalCartListPrice) + parseFloat(element.price)
    });

    return (
        <div className="my-5 container-fluid cart-page">
            <ToastContainer />
            <div className="row table-responsive">
                <table className="table">
                    <thead>
                        <tr id="table-tr-bg">
                            <th scope="col">Remove</th>
                            <th scope="col">Image</th>
                            <th scope="col">Product Title</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>

                    <tbody className="text-center text-justify">
                        {cartlist?.map(item => {
                            return <tr key={item?.id}>
                                <td scope="row">
                                    <a type='button' href='#' onClick={() => handleDeleteCartList(item?.id)}>
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            size="lg"
                                            className="text-danger pt-4"
                                        />
                                    </a>
                                </td>

                                <td>
                                    <img
                                        src={item?.image}
                                        alt={item?.name}
                                        style={{ width: "80px", height: "80px" }}
                                    />
                                </td>
                                <td>
                                    <p className="mt-4">{item?.name}</p>
                                </td>
                                <td>
                                    <input
                                        className="mt-4"
                                        id="number"
                                        type="number"
                                        defaultValue={item.quantity}
                                        min="1"
                                        style={{ width: "50px" }}
                                        onChange={(e) =>
                                            handleChangeSinglePost(e.target.value, item.product_id, item.id)
                                        }
                                    ></input>
                                </td>
                                <td>
                                    <p className="mt-4">{item?.price}</p>
                                </td>
                            </tr>
                        })}


                    </tbody>
                </table>

            </div>
            <div className="row">
                <div className="col-md-6">
                    <Card>
                        <Card.Body style={{ margin: "0", padding: "0" }}>
                            <Card.Title
                                style={{
                                    backgroundColor: "#f79837",
                                    color: "#fff",
                                    padding: "10px",
                                    width: "100%",
                                }}
                            >
                                COUPON
                            </Card.Title>

                            <div style={{ padding: "15px" }} className="cupon">
                                <p className="text-secondary ">
                                    Enter your coupon code if you have one.
                                </p>
                                <input
                                    className="rounded-0"
                                    style={{ padding: '6px 0px' }}
                                    placeholder="Coupon code"
                                    type="text"
                                />
                                <Button variant="dark py-2">APPLY TO CUPON</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card>
                        <Card.Body style={{ margin: "0", padding: "0" }}>
                            <Card.Title
                                style={{
                                    backgroundColor: "#f79837",
                                    color: "#fff",
                                    padding: "10px",
                                    width: "100%",
                                }}
                            >
                                CART TOTAL
                            </Card.Title>
                            <div style={{ padding: "15px" }} className="text-secondary">
                                <div className="d-flex justify-content-between py-2">
                                    <span>Subtotal</span>
                                    <span>${totalCartListPrice}</span>
                                </div>
                                <div className="d-flex justify-content-between py-2">
                                    <span>Shipping</span>
                                    <span>
                                      ${totalCartListPrice > 0 ? shipping : (shipping = 0)}.00
                                    </span>
                                </div>
                                <p className="text-end py-2">Calculate shipping</p>
                                <hr />
                                <div className="d-flex justify-content-between py-2">
                                    <span>Total</span>
                                    <span>${totalCartListPrice + shipping}</span>
                                </div>
                                <div className="d-flex justify-fontent-end py-2">
                                    <Button variant="dark pb-2 pt-2 ms-auto">
                                        PROCEED TO CHECKOUT
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CartListComponent;