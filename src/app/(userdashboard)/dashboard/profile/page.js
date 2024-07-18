
"use client"
import IsAuth from "@/src/component/IsAuth";
import { showUser } from "@/src/redux/features/userDetailSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {


  const temUser = localStorage.getItem('user');
  const userid = JSON.parse(temUser)


  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(showUser(userid.id))
  }, [])

  return (
    <div className="my-4">

      <Card>
        <div className="row pb-5">
          <div className="col-lg-2 mx-auto">
            <img src={users?.image} alt="User Photo" style={{ width: '150px', height: '150px' }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Card.Body>
              <h5>Full Name</h5>
              <p>{users?.name}</p>
            </Card.Body>
            <Card.Body>
              <h5>Birthday</h5>
              <p>{users?.date_of_birth}</p>
            </Card.Body>
          </div>
          <div className="col-md-4">
            <Card.Body>
              <h5>Email Address </h5>
              <p>{users?.email}</p>
            </Card.Body>
            <Card.Body>
              <h5>Gender</h5>
              <p>{users?.gender}</p>
            </Card.Body>
          </div>
          <div className="col-md-4">
            <Card.Body>
              <h5>Phone Number</h5>
              <p>{users?.phone ? users?.email : "Please Enter Your Phone Number"}</p>
            </Card.Body>
            <Card.Body>
              <h5>Address</h5>
              <p>{users?.address}</p>
            </Card.Body>
          </div>
        </div>
        <Link href={`/dashboard/profile/${userid?.id}`} className="mt-4 btn btn-warning font-weight-bold">
          EDIT PROFILE
        </Link>
      </Card>

    </div>
  );
};

export default IsAuth(Profile);
