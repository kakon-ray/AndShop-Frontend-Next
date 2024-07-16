"use client"
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import StarRatings from "react-star-ratings/build/star-ratings";
import Review from "../../../../component/Dashboard/Review/Review";
import IsAuth from "@/src/component/IsAuth";

const page = () => {

  return (
    <>
        <Review/>
    </>
  );
};

export default IsAuth(page);
