import React from "react";
import { Carousel } from "react-bootstrap";
import bike1 from "../../../Images/banner/wp1859207.jpg";
import img2 from "../../../Images/banner/image.jpg";
import img3 from "../../../Images/banner/wp6291908.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <Carousel fade>
            <Carousel.Item>
              <img className="d-block w-100" src={bike1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-md-4 p-5 " style={{ textAlign: "justify" }}>
          <h3>We sell good products for you</h3>
          <p>
            We and our partners store and/or access information on a device,
            such as cookies and process personal data, such as unique
            identifiers .
          </p>
          <div className="my-2">
            <Link to="/services">
              <button className="mt-5 btn2">Explore More</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
