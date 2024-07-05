"use client"
import React from 'react';
import { Button, Card, Form } from "react-bootstrap";
const Sell = () => {
    return (
        <div className="w-100 mx-auto">
        <Card className="p-2 m-4">
          <p className="py-3 text-secondary text-center">
            If you are want to be selling AND SHOP Please fill the following
            input filed with your personal information
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicReviewName">
              <label className="pb-1">Name</label>
              <input
                className="form-control rounded-0"
                type="name"
                name="name"
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicReviewName">
              <label className="pb-1">Phone</label>
              <input
                className="form-control rounded-0"
                type="phone"
                name="phone"
                placeholder="Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicReviewName">
              <label className="pb-1">Email</label>
              <input
                className="form-control rounded-0"
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicReviewName">
              <label className="pb-1">ID Card Front</label>
              <input
                className="form-control rounded-0"
                type="file"
                placeholder="ID Card"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicReviewName">
              <label className="pb-1">ID Card Back</label>
              <input
                className="form-control rounded-0"
                type="file"
                placeholder="ID Card"
              />
            </Form.Group>

            <div className="mt-3 text-center">
              <Button variant="warning" className="mx-auto" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </div>
    );
};

export default Sell;