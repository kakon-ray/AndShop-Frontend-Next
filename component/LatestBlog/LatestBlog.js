"use client"
import React from "react";
import { Card, Button } from "react-bootstrap";
const LatestBlog = () => {
  return (
    <div
      className="container-fluid py-3 my-3"
      style={{
        fontFamily: '"Poppins", sans-serif',
      }}
    >
      <div className="py-2 text-center">
        <h1>LATEST BLOG</h1>
        <p className="text-secondary">
          Mauris luctus nisi sapien tristique dignissim ornare
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Card>
            <div className="img-hover-zoom">
              <img
                variant="top"
                src="https://andshop-react.netlify.app/static/media/post2.81cb9e34.png"
              />
            </div>

            <Card.Body>
              <h6>24 February 2021</h6>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text</Card.Text>
              <Button variant="outline-warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <div className="img-hover-zoom">
              <img
                variant="top"
                src="https://andshop-react.netlify.app/static/media/post3.a01f1b65.png"
              />
            </div>

            <Card.Body>
              <h6>24 February 2021</h6>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text</Card.Text>
              <Button variant="outline-warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4">
          <Card>
            <div className="img-hover-zoom">
              <img
                variant="top"
                src="https://andshop-react.netlify.app/static/media/post1.9424ebbc.png"
              />
            </div>

            <Card.Body>
              <h6>24 February 2021</h6>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Some quick example text</Card.Text>
              <Button variant="outline-warning">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
