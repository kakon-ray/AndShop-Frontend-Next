/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect } from 'react';
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux';
import { showCartList } from '@/src/redux/features/cartDetailSlice';

const CartListComponent = () => {
    const dispatch = useDispatch();

    const { cartlist } = useSelector((state) => state.cartlist);
    console.log(cartlist)
  
    useEffect(() => {
      dispatch(showCartList())
    }, [])

    return (
        <div className="my-5 container-fluid cart-page">
                <div className="row table-responsive">
                    <table className="table">
                        <thead>
                            <tr id="table-tr-bg">
                                <th scope="col">Remove</th>
                                <th scope="col">Image</th>
                                <th scope="col">Product Title</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>

                        <tbody className="text-center text-justify">
                            {cartlist?.map(item => {
                                return  <tr key={item?.id}>
                                <td scope="row">
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        size="lg"
                                        className="text-danger pt-4"
                                    />
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
                                        style={{padding:'6px 0px'}}
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
                                        <span>$50.00</span>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <span>Shipping</span>
                                        <span>
                                            $50.00
                                        </span>
                                    </div>
                                    <p className="text-end py-2">Calculate shipping</p>
                                    <hr />
                                    <div className="d-flex justify-content-between py-2">
                                        <span>Total</span>
                                        <span>$50.00</span>
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