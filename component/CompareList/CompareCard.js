"use client"
import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import StarRatings from "react-star-ratings/build/star-ratings";

const CompareCard = () => {
  return (
    <div className="col-md-6 px-0 mx-0">
 
        <Card className="text-center m-3">
          <Card.Img
            variant="top"
            style={{ height: "600px" }}
            className="img-fluid"
            src='https://andshop-react.netlify.app/static/media/product10.d71c44ec.png'
          />
          <Card.Body>
            <Card.Title>Compare Title</Card.Title>

            <Card.Text>500</Card.Text>
            <div className="mb-3">
              <StarRatings
                className="py-3 "
                rating={2.5}
                starDimension="20px"
                starSpacing="15px"
                starRatedColor="#f79837"
              />
            </div>
            <div
              style={{ height: "100px", overflow: "auto" }}
              className="d-flex align-items-center"
            >
              <p>Comparelist description</p>
            </div>

            <div className="my-3">
              <Button variant="dark">
                {" "}
                Add to Cart
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  size="sm"
                  className="ms-1"
                />
              </Button>

              <span className="ms-2 my-2">
                <Button
                  variant="dark"
                >
                  {" "}
                  Remove Cart
                  <FontAwesomeIcon icon={faTrash} size="sm" className="ms-1" />
                </Button>
              </span>
            </div>
          </Card.Body>
        </Card>
  
    </div>
  );
};

export default CompareCard;
