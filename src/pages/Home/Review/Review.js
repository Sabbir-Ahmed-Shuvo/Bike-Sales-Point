import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import userimg1 from "../../../Images/icon/639-6399637_henry-circle-gentleman.png";
const Review = () => {
  return (
    <div className="container mt-5">
      <h1>CUSTOMERS REVIEWS</h1>
      <Row xs={1} md={3} className="g-4 mt-5">
        <Col>
          <Card style={{ backgroundColor: "lightgray", border: "none" }}>
            <Card.Img
              variant="top"
              src={userimg1}
              className="w-25 mx-auto pt-3"
            />
            <Card.Body>
              <Card.Title>Sabbir Ahmed</Card.Title>
              <h6>sabbir@gamil.com</h6>
              <Card.Text>
                Very casual looking, light weight and mostly good material
                quality. very cheap price.
              </Card.Text>
              <div>
                <span style={{ color: "rgb(206, 206, 4)" }}>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </span>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ backgroundColor: "lightgray", border: "none" }}>
            <Card.Img
              variant="top"
              src={userimg1}
              className="w-25 mx-auto pt-3"
            />
            <Card.Body>
              <Card.Title>Tanmoy Parvez</Card.Title>
              <h6>Tanmoy@gamil.com</h6>
              <Card.Text>
                Extra ordinary fantastic mind blowing experience with alpha
                sunglasses.
              </Card.Text>
              <div>
                <span style={{ color: "rgb(206, 206, 4)" }}>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </span>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ backgroundColor: "lightgray", border: "none" }}>
            <Card.Img
              variant="top"
              src={userimg1}
              className="w-25 mx-auto pt-3"
            />
            <Card.Body>
              <Card.Title>Israfil Hossen Cse</Card.Title>
              <h6>Israfil@gamil.com</h6>
              <Card.Text>
                Very stylish,light weight. very cheap price and mostly good
                material quality. I just loved it.
              </Card.Text>
              <div>
                <span style={{ color: "rgb(206, 206, 4)" }}>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </span>
                <i class="fas fa-star"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Review;
