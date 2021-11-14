import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import blogimg from "../../../Images/services/bike1.jpg";
import blogimg2 from "../../../Images/services/bike2.png";
import blogimg3 from "../../../Images/services/bike3.jpg";
import blogimg4 from "../../../Images/services/bike4.jpg";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="container">
        <h1 className="mt-5">Latest blog posts and articles</h1>
        <div className="row mt-5">
          <div className="col-md-2 pt-4">
            <h4>First Released</h4>
            <h1 className="pt-2">25</h1>
            <p>Dec. 2020</p>
          </div>
          <div className="col-md-3 pt-2">
            {<img className="" width="75%" src={blogimg} alt="" />}
          </div>
          <div className="col-md-2 pt-4">
            <h4 className="pt-3">Yamaha MT 15</h4>
            <h6>Engine Capacity: 150CC</h6>
            <h6>Mileage : 45km</h6>
          </div>
          <div className="col-md-5 pt-3 blog-text">
            <h4 className="p-3">
              Does Early Intervention for Breast Cancer Save Lives
            </h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2 pt-4">
            <h4>First Released</h4>
            <h1 className="pt-2">25</h1>
            <p>Dec. 2020</p>
          </div>
          <div className="col-md-3 pt-2">
            {<img className="" width="75%" src={blogimg2} alt="" />}
          </div>
          <div className="col-md-2 pt-4">
            <h4 className="pt-3">Yamaha MT 15</h4>
            <h6>Engine Capacity: 150CC</h6>
            <h6>Mileage : 45km</h6>
          </div>
          <div className="col-md-5 pt-3 blog-text">
            <h4 className="p-3">
              Our Comprehensive Network of Specialized Services
            </h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2 pt-4">
            <h4>First Released</h4>
            <h1 className="pt-2">15</h1>
            <p>Dec. 2020</p>
          </div>
          <div className="col-md-3 pt-2">
            {<img className="" width="75%" src={blogimg3} alt="" />}
          </div>
          <div className="col-md-2 pt-4">
            <h4 className="pt-3">Yamaha MT 15</h4>
            <h6>Engine Capacity: 150CC</h6>
            <h6>Mileage : 45km</h6>
          </div>
          <div className="col-md-5 pt-3 blog-text">
            <h4 className="p-3">What You Need to Do When Preparing</h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2 pt-4">
            <h4>First Released</h4>
            <h1 className="pt-2">11</h1>
            <p>Dec. 2020</p>
          </div>
          <div className="col-md-3 pt-2">
            {<img className="" width="75%" src={blogimg4} alt="" />}
          </div>
          <div className="col-md-2 pt-4">
            <h4 className="pt-3">Yamaha MT 15</h4>
            <h6>Engine Capacity: 150CC</h6>
            <h6>Mileage : 45km</h6>
          </div>
          <div className="col-md-5 pt-2 blog-text">
            <h4 className="p-3">
              Centura Health Offers Great Services Designed to Help You Take
              Control of Diabetes{" "}
            </h4>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Home;
