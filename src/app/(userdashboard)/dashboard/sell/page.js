"use client"
import React from "react";
import Sell from "../../../../component/Dashboard/Sell/Sell";
import IsAuth from "@/src/component/IsAuth";

const page = () => {
  return (
    <div>
       <Sell/>
    </div>
  );
};

export default IsAuth(page);
