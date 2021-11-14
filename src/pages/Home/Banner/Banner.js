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
        <div className="col-md-4 p-5">
          <h1>This is our another path</h1>
          <div className="my-5">
            <Link to="/services">
              <button className="mt-5 btn2">Show All Service</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
