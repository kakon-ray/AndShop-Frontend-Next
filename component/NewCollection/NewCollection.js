"use client"
import React from "react";
import img1 from "../images/Collection/woman1.b58d4262.png";
import img2 from "../images/Collection/woman1.b58d4262.png";
import img3 from "../images/Collection/woman4.6c41e1ce.png";
import CardsHoverContent from "./CardsHoverContent";
import "./NewCollection.css";

const NewCollection = () => {
  return (
    <div id="newcollection" className="container-fluid my-3">
      <div className="row">
        <div className="col-md-4">
          <CardsHoverContent
            img={img1}
            style={{ height: "216px" }}
            title="OUTERWEAR"
            collection="new"
            collection2="Collection"
          />
          <CardsHoverContent
            img={img2}
            style={{ height: "216px" }}
            title="OUTERWEAR"
            collection="new"
            collection2="Collection"
          />
        </div>
        <div className="col-md-4">
          <CardsHoverContent
            img={img3}
            style={{ height: "450px" }}
            title="OUTERWEAR"
            collection="new"
            collection2="Collection"
          />
        </div>
        <div className="col-md-4">
          <CardsHoverContent
            img={img1}
            style={{ height: "216px" }}
            title="OUTERWEAR"
            collection="new"
            collection2="Collection"
          />
          <CardsHoverContent
            img={img2}
            style={{ height: "216px" }}
            title="OUTERWEAR"
            collection="new"
            collection2="Collection"
          />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
