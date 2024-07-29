/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ShopCard.css";
import HandleClick from "./HandleClick"

const ShopCard = ({ position, title, price, img, img1, item }) => {
  return (
    <div className="col-md-3" id="shop-card">
      <div className="card">
        <div className="card-container">
          <div className="img-container">
            <img src={img} className="img-fluid" />

            <img src={img1} className="upper-image img-fluid" />
          </div>

          <div className="card-body text-center">
            <p>{title}</p>
            <h5>{price}</h5>
          </div>
          <span className="badge-container p-0">
            <span className="badge">{position}</span>
          </span>

          <HandleClick item={item}/>

        </div>
      </div>
    </div>
  );
};

export default ShopCard;