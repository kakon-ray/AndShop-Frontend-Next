"use client"
import React from 'react';
import IsAuth from "@/src/component/IsAuth";
import { Button, Card, Form } from "react-bootstrap";

const EditProfile = () => {
    return (
        <div>
            <div>
                <h1 className="my-3 text-secondary">My Profile</h1>
                <Card className='p-3'>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="my-4">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="my-4">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Enter Email"
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="my-4">
                                <Form.Select name="gender" className="rounded-0 py-3">
                                    <option value="">Open this select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Form.Select>
                            </Form.Group>


                        </div>
                        <div className="col-md-6">
                            <Form.Group className="my-4">
                                <Form.Control
                                    type="phone"
                                    name="phone"
                                    placeholder="Enter Phone Number"
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="my-4">
                                <Form.Control
                                    type="text"
                                    name="address"
                                    placeholder="Enter Address"
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>

                    </div>
                  
                    <Button className="mt-4 btn btn-warning font-weight-bold w-25">
                        Update Submit
                    </Button>
                </Card>

            </div >
        </div >
    );
};

export default IsAuth(EditProfile);