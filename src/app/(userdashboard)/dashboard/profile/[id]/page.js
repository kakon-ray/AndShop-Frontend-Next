"use client"
import React, { useEffect, useState } from 'react';
import IsAuth from "@/src/component/IsAuth";
import { Button, Card, Form } from "react-bootstrap";
import { useRouter } from 'next/navigation';
import { useParams, redirect } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { showUser, updateUserSubmit } from "@/src/redux/features/userDetailSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

const EditProfile = () => {

    const params = useParams()
    const dispatch = useDispatch();
    

    const users = useSelector((state) => state.users?.users);


    useEffect(() => {
        dispatch(showUser(params.id))
    }, [dispatch, params.id])


    // submit create cateogry
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("id", params.id);
        formData.append("name", e.target.name.value ? e.target.name.value : users?.name);
        formData.append("email", e.target.email.value ? e.target.email.value : users?.email);
        formData.append("gender", e.target.gender.value ? e.target.gender.value : users?.gender);
        formData.append("phone", e.target.phone.value ? e.target.phone.value : users?.phone);
        formData.append("date_of_birth", e.target.date_of_birth.value ? e.target.date_of_birth.value : users?.date_of_birth);
        formData.append("address", e.target.address.value ? e.target.address.value : users?.address);
        formData.append("image", e.target.image.files[0] ? e.target.image.files[0] : "");

        dispatch(updateUserSubmit(formData))

    }

    return (
        <div>
            <ToastContainer />
         
            <form onSubmit={handleSubmit}>
                <Card className='p-3'>
                    <div className="row">
                        <div className="col-lg-2 mx-auto">
                            <img src={users?.image} alt="User Photo" style={{ width: '140px', height: '140px' }} className='rounded-circle' />
                            <h3 className="py-2 text-secondary text-center">Edit Profile</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Form.Group className="my-3">
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    defaultValue={users?.name}
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="my-3">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    defaultValue={users?.email}
                                    readOnly
                                    placeholder='Enter Email'
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="my-3">
                                <Form.Select name="gender" className="rounded-0 py-3">
                                    <option value="">Open this select Gender</option>
                                    <option value="Female" selected={users?.gender == 'Female'}>Female</option>
                                    <option value="Male" selected={users?.gender == 'Male'}>Male</option>
                                </Form.Select>
                            </Form.Group>


                        </div>
                        <div className="col-md-4">
                            <Form.Group className="my-3">
                                <Form.Control
                                    type="phone"
                                    name="phone"
                                    defaultValue={users?.phone}
                                    placeholder='Enter Phone'
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="my-3">
                                <Form.Control
                                    type="date"
                                    name="date_of_birth"
                                    defaultValue={users?.date_of_birth}
                                    placeholder='Enter Date of Birth'
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>
                        <div className="col-md-4">
                            <Form.Group className="my-3">
                                <Form.Control
                                    type="text"
                                    name="address"
                                    defaultValue={users?.address}
                                    placeholder='Enter Address'
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>

                        <div className="col-md-4">
                            <Form.Group className="my-3">
                                <Form.Control
                                    type="file"
                                    name="image"
                                    placeholder='Enter Address'
                                    className="rounded-0 py-3"
                                />
                            </Form.Group>
                        </div>

                    </div>

                    <Button className="btn btn-warning font-weight-bold w-25 mx-auto" type='submit'>
                        Update Submit
                    </Button>
                </Card>
            </form>


        </div >
    );
};

export default IsAuth(EditProfile);