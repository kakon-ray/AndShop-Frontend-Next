"use client"
import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./LoginRegister.css";

const PasswordResetCard = () => {
    return (
        <div className="container">
            <div className="row py-4">
                <div className="col-lg-6 mx-auto">
                    <Card className="mx-auto rounded-0 pb-5">
                        <h4 className="text-center pb-0 pt-5">Reset Your Password</h4>
                        <Card.Body>
                            <Form>
                                <Form.Group className="my-4" controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter Email"
                                        className="rounded-0 py-3"
                                    />
                                </Form.Group>
                                <Form.Group className="my-4" controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter New Password"
                                        className="rounded-0 py-3"
                                    />
                                </Form.Group>

                                <Form.Group className="my-4" controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Retype New Password"
                                        className="rounded-0 py-3"
                                    />
                                </Form.Group>

                                <Button
                                    onClick={() => navigation("/dashboard")}
                                    className="btn btn-warning w-100 py-3"
                                    style={{ backgroundColor: "#f79837", color: "#fff" }}
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Form>
                        </Card.Body>

                    </Card>
                </div>
            </div>
        </div>
    );
};

export default PasswordResetCard;