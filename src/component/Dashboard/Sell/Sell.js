"use client"
import { showUser, updateUserRoleRequestSubmit } from '@/src/redux/features/userDetailSlice';
import React, { useEffect } from 'react';
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import idCardFront from '../../images/userInfo/NID_Front.jpg'
import idCardBack from '../../images/userInfo/NID_Back.jpg'
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sell = () => {

  const temUser = localStorage.getItem('user');
  const userid = JSON.parse(temUser)
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(showUser(userid.id))
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("id", userid.id);
    formData.append("name", e.target.name.value ? e.target.name.value : users?.name);
    formData.append("email", e.target.email.value ? e.target.email.value : users?.email);
    formData.append("phone", e.target.phone.value ? e.target.phone.value : users?.phone);
    formData.append("id_card_front", e.target.id_card_front.files[0] ? e.target.id_card_front.files[0] : "");
    formData.append("id_card_back", e.target.id_card_back.files[0] ? e.target.id_card_back.files[0] : "");
    formData.append("role", e.target.role.value ? e.target.role.value : users?.role);
   
    dispatch(updateUserRoleRequestSubmit(formData))

  //   for (const entry of formData.entries()) {
  //     console.log(entry, entry);
  // }

}

  return (
    <div className="w-100 mx-auto">
       <ToastContainer />
      <Card className="p-4 m-4">
        <p className="py-3 text-secondary text-center">
          If you are want to be selling AND SHOP Please fill the following
          input filed with your personal information
        </p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-4">
              <Form.Group className="mb-3" controlId="formBasicReviewName">
                <label className="pb-1">Name</label>
                <input
                  className="form-control rounded-0"
                  type="name"
                  name="name"
                  defaultValue={users?.name}
                  placeholder="Name"
                />
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Form.Group className="mb-3" controlId="formBasicReviewName">
                <label className="pb-1">Phone</label>
                <input
                  className="form-control rounded-0"
                  type="phone"
                  name="phone"
                  defaultValue={users?.phone}
                  placeholder="Phone Number"
                />
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Form.Group className="mb-3" controlId="formBasicReviewName">
                <label className="pb-1">Email</label>
                <input
                  className="form-control rounded-0"
                  type="email"
                  name='email'
                  defaultValue={users?.email}
                  placeholder="Email"
                />
              </Form.Group>
            </div>
            <div className="col-lg-4">
              <Form.Group className="mb-3" controlId="formBasicReviewName">
                <label className="pb-1">ID Card Front</label>
                <input
                  className="form-control rounded-0"
                  type="file"
                  name='id_card_front'
                  placeholder="ID Card"
                />
              </Form.Group>
              {
                users?.id_card_front ? <img src={users?.id_card_front} style={{ height: '200px' }} className='img-fluid' alt="id_card_front" /> : <Image style={{ height: '200px' }} className="img-fluid" src={idCardFront}></Image>
              }

            </div>
            <div className="col-lg-4">
              <Form.Group className="mb-3" controlId="formBasicReviewName">
                <label className="pb-1">ID Card Back</label>
                <input
                  className="form-control rounded-0"
                  type="file"
                  name='id_card_back'
                  placeholder="ID Card"
                />
              </Form.Group>
              {
                users?.id_card_back ? <img src={users?.id_card_back} style={{ height: '200px' }} className='img-fluid' alt="id_card_front" /> : <Image style={{ height: '190px' }} className="img-fluid" src={idCardBack}></Image>
              }

            </div>

            <div className="col-lg-4">
              <Form.Group>
                <label className="pb-1">You want to be selling AND SHOP?</label>
                <Form.Select name="role" className="rounded-0">
                  <option value="">Open this select Yes / No</option>
                  <option value="vendor" selected={users?.role == 'vendor'}>Yes</option>
                  <option value="user" selected={users?.role == 'user'}>NO</option>
                </Form.Select>
              </Form.Group>
            </div>
          </div>

          <div className="mt-3 text-center">
            <Button variant="warning" className="mx-auto" type="submit">
              Submit
            </Button>
          </div>

        </form>
      </Card>
    </div>
  );
};

export default Sell;