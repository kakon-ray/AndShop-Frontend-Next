
"use client"
import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";

import "./LoginRegister.css";
import Link from "next/link";

const LoginCard = () => {


    return (
        <div>
            <Card className="mx-auto rounded-0">
                <h4 className="text-center pb-0 pt-3">Login</h4>
                <Card.Body className="p-5 py-4">
                    <Form>
                        <Form.Group className="my-4" controlId="formBasicEmail">
                            <Form.Control
                                type="email"
                                value="thisiskakonray@gmail.com"
                                placeholder="Enter Email"
                                className="rounded-0 py-3"
                            />
                        </Form.Group>
                        <Form.Group className="my-4" controlId="formBasicPassword">
                            <Form.Control
                                type="password"
                                value="123456"
                                placeholder="Enter Password"
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
                <p className="text-center">
                    Already have a account?{" "}
                    <Link href="/registation" style={{ textDecoration: "none" }}>
                        <span style={{ cursor: "pointer", color: "#f79837" }}>Registration</span>
                    </Link>
                </p>
            </Card>
        </div>
    );
};

export default LoginCard;