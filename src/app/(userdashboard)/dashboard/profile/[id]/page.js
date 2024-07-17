"use client"
import React, { useEffect } from 'react';
import IsAuth from "@/src/component/IsAuth";
import { Button, Card, Form } from "react-bootstrap";
import { useRouter } from 'next/navigation';
import { useParams,redirect  } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { showUser } from "@/src/redux/features/userDetailSlice";

const EditProfile = () => {
    const params = useParams()
    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(showUser(params.id))
    }, [])
    
    return (
        <div>

                <h1 className="my-3 text-secondary">Edit Profile</h1>
                <Card className='p-3'>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="my-4">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    defaultValue={users?.name}
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="my-4">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    defaultValue={users?.email}
                                    placeholder="Enter Email"
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="my-4">
                                <Form.Select name="gender" className="rounded-0 py-3">
                                    <option value="">Open this select Gender</option>
                                    <option value="Female" selected={users.gender == 'Female'}>Female</option>
                                    <option value="Female" selected={users.gender == 'Male'}>Male</option>
                                </Form.Select>
                            </Form.Group>


                        </div>
                        <div className="col-md-6">
                            <Form.Group className="my-4">
                                <Form.Control
                                    type="phone"
                                    name="phone"
                                    defaultValue={users?.phone}
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
                                    defaultValue={users?.address}
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
    );
};

export default IsAuth(EditProfile);