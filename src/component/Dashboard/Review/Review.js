"use client"
import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import StarRatings from "react-star-ratings/build/star-ratings";

const Review = () => {
  const [rating, setRating] = useState(5);

  const onStarClick = (nextValue, prevValue) => {
    setRating(nextValue);
  };


  return (
    <div>
      <Card className="p-2 m-4">
        <h2 className="py-3 text-secondary">Please Add a Positive Review</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <input
              className="form-control rounded-0"
              type="text"
              placeholder="Enter Review Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicReviewName">
            <textarea
              name="description"
              placeholder="Description"
              className="w-100 form-control rounded-0"
              rows="9"
            ></textarea>
          </Form.Group>

          <div>
            <StarRatings
              rating={rating}
              starDimension="30px"
              starRatedColor="#DAA520"
              changeRating={onStarClick}
              numberOfStars={6}
              starHoverColor="#FFD700"
              name="rating"
            />
          </div>

          <Button variant="warning" className="mt-4" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default Review;
