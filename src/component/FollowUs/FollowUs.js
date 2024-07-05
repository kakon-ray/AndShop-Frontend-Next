import React from "react";
import "./FollowUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-solid-svg-icons";
import FollowUsCard from "./FollowUsCard";

const FollowUs = () => {
  return (
    <div id="follow-us" className="py-5 container-fluid">
      <div className="text-center">
        <h1>FOLLOW US INSTAGRAM</h1>
        <p className="text-secondary">
          Follow Us and get updated from our instagram
        </p>
      </div>

      <div className="row">
        <FollowUsCard />
        <FollowUsCard />
        <FollowUsCard />
        <FollowUsCard />
      </div>
    </div>
  );
};

export default FollowUs;
