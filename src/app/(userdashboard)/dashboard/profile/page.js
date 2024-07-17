"use client"
import IsAuth from "@/src/component/IsAuth";
import { showUser } from "@/src/redux/features/userDetailSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const {users} = useSelector((state) => state.users);

  useEffect(() => {
      dispatch(showUser(user.id))
  }, [])

  return (
    <div>
      <h1 className="my-3 text-secondary">My Profile</h1>
      <Card>
        <div className="row">
          <div className="col-md-4">
            <Card.Body>
              <h5>Full Name</h5>
              <p>{users.name}</p>
            </Card.Body>
            <Card.Body>
              <h5>Birthday</h5>
              <p>{user?.date_of_birth}</p>
            </Card.Body>
          </div>
          <div className="col-md-4">
            <Card.Body>
              <h5>Email Address </h5>
              <p>{user?.email}</p>
            </Card.Body>
            <Card.Body>
              <h5>Gender</h5>
              <p>{user?.gender}</p>
            </Card.Body>
          </div>
          <div className="col-md-4">
            <Card.Body>
              <h5>Phone Number</h5>
              <p>{user?.phone ? user.email : "Please Enter Your Phone Number"}</p>
            </Card.Body>
            <Card.Body>
              <h5>Address</h5>
              <p>{user?.address}</p>
            </Card.Body>
          </div>
        </div>
      </Card>
      <Link href={`/dashboard/profile/${user?.id}`} className="mt-4 btn btn-warning font-weight-bold">
        EDIT PROFILE
      </Link>
    </div>
  );
};

export default IsAuth(Profile);
