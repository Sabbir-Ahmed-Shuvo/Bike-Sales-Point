import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import userimg1 from "../../../Images/icon/639-6399637_henry-circle-gentleman.png";
import Rating from "react-rating"

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container mt-5">
      <h1>CUSTOMERS REVIEWS</h1>
      <Row xs={1} md={3} className="g-4 mt-5">
        {
          reviews.map((review) => <Col>
            <Card className="border-0 shadow-lg">
              <i className="far fa-user-circle mt-3 fs-1"></i>
              <Card.Body>
                <Card.Title>{review?.name}</Card.Title>
                <h6>{review?.email}</h6>
                <Card.Text>
                  {review?.message}.
                </Card.Text>
                <div>

                  <Rating
                    className="text-warning fs-4"
                    readonly
                    placeholderRating={review?.rating}
                    emptySymbol={<i className="far fa-star"></i>}
                    placeholderSymbol={<i className="fas fa-star"></i>}
                    fullSymbol={<i className="fas fa-star"></i>}
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>)
        }

      </Row>
    </div>
  );
};

export default Review;
