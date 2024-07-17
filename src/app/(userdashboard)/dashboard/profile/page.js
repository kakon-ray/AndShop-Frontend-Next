"use client"
import IsAuth from "@/src/component/IsAuth";
import React from "react";
import { Button, Card } from "react-bootstrap";

const Profile = () => {
  return (
    <div>
      <h1 className="my-3 text-secondary">My Profile</h1>
      <Card>
        <div className="row">
          <div className="col-md-4">
            <Card.Body>
              <h5>Full Name</h5>
              <p>Kakon Ray</p>
            </Card.Body>
            <Card.Body>
              <h5>Birthday</h5>
              <p>Please enter your birthday</p>
            </Card.Body>
          </div>
          <div className="col-md-4">
            <Card.Body>
              <h5>Email Address </h5>
              <p>kakonroy043@gmail.com</p>
            </Card.Body>
            <Card.Body>
              <h5>Gender</h5>
              <p>Please enter your Gender</p>
            </Card.Body>
          </div>
          <div className="col-md-4">
            <Card.Body>
              <h5>Phone Number</h5>
              <p>01707500512</p>
            </Card.Body>
            <Card.Body>
              <h5>Address</h5>
              <p>Please enter your shop Address</p>
            </Card.Body>
          </div>
        </div>
      </Card>
      <Button className="mt-4 btn btn-warning font-weight-bold">
        EDIT PROFILE
      </Button>
    </div>
  );
};

export default IsAuth(Profile);
