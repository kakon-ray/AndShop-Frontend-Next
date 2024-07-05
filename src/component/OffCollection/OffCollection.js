/* eslint-disable jsx-a11y/role-supports-aria-props */
import React from "react";
import img from "../images/Collection/woman1.b58d4262.png";
import "./OffCollection.css";
import Image from "next/image";
const OffCollection = () => {
  return (
    <div id="off-collection" className="container-fluid my-5 ">
      <div className="row">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-9 offcollection-img">
              <Image
                src={img}
                alt=""
                className="img-fluid rounded"
                style={{ height: "500px" }}
              />
            </div>
            <div className="col-md-3 text-center pt-4 mt-5 ">
              <ul className="list-group ">
                <li className="list-group-item">
                  <h3 className="font-weight-bold">00</h3> days
                </li>
                <li className="list-group-item">
                  <h3 className="font-weight-bold">00</h3> Hours
                </li>
                <li className="list-group-item">
                  <h3 className="font-weight-bold">00</h3>
                  Minutes
                </li>
                <li className="list-group-item">
                  <h3 className="font-weight-bold">00</h3>
                  Seconds
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 pt-4 mt-5">
          <h1 className="off-title">20% OFF FOR ALL T-SHIRT COLLECTION</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            quisquam, odit assumenda sit modi commodi esse necessitatibus
            temporibus aperiam veritatis eveniet!
          </p>
          <button className="btn btn-outline-warning">View More</button>
        </div>
      </div>
    </div>
  );
};

export default OffCollection;
