import React from "react";
import Banner from "../Banner/Banner";
import "./Home.css";
import picture from "../../../Images/h2-img-3.webp";
import blogimg from "../../../Images/services/blog-img-19.jpg";
import blogimg2 from "../../../Images/services/blog-img-6-1.jpg";
import blogimg3 from "../../../Images/services/blog-img-17.jpg";
import blogimg4 from "../../../Images/services/blog-img-18-1.jpg";
import Services from "../Services/Services";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 className="title">We’re at your service</h1>
            <img className="mt-5" src={picture} alt="" />
            <h4>Angela Adams</h4>
            <p>Cardiac Surgery</p>
          </div>
          <div className="col-md-6">
            <p className="details">
              Nullam erat lectus, ullamcorper sed finibus ut, vulputate portitor
              diam nulla, iaculis neque sed enim efficitur pellentesque tellus
              turpis quis magna. Phasellus vel hendrerit erat. Quisque euismod
              interdum cond estibulum ante ipsum primis in faucibus orci luctus
              et ultricecubilia curae; Nullam placerat leo mauris, lacinia
              pulvinar,runc tincidun. Tfaucibus orci sodales augue et pellen
              rutrum ut convallis egestas, euismod in urna estibulum eu sem in.
            </p>
          </div>
        </div>
        <h1 className="mt-5">Latest blog posts and articles</h1>
        <div className="row mt-5">
          <div className="col-md-2 pt-4">
            <h1 className="pt-2">25</h1>
            <p>Dec. 2020</p>
          </div>
          <div className="col-md-3 pt-2">
            {<img className="" width="75%" src={blogimg} alt="" />}
          </div>
          <div className="col-md-2 pt-4">
            <h4 className="pt-3">Mark Mayers</h4>
            <p>Surgery</p>
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
            <h1 className="pt-2">19</h1>
            <p>Dec. 2020</p>
          </div>
          <div className="col-md-3 pt-2">
            {<img className="" width="75%" src={blogimg2} alt="" />}
          </div>
          <div className="col-md-2 pt-4">
            <h4 className="pt-3">Mark Mayers</h4>
            <p>Surgery</p>
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
            <h1 className="pt-2">15</h1>
            <p>Dec. 2020</p>
          </div>
          <div className="col-md-3 pt-2">
            {<img className="" width="75%" src={blogimg3} alt="" />}
          </div>
          <div className="col-md-2 pt-4">
            <h4 className="pt-3">Mark Mayers</h4>
            <p>Surgery</p>
          </div>
          <div className="col-md-5 pt-3 blog-text">
            <h4 className="p-3">
              What You Need to Do When Preparing for Surgery
            </h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-2 pt-4">
            <h1 className="pt-2">11</h1>
            <p>Dec. 2020</p>
          </div>
          <div className="col-md-3 pt-2">
            {<img className="" width="75%" src={blogimg4} alt="" />}
          </div>
          <div className="col-md-2 pt-4">
            <h4 className="pt-3">Mark Mayers</h4>
            <p>Surgery</p>
          </div>
          <div className="col-md-5 pt-2 blog-text">
            <h4 className="p-3">
              Centura Health Offers Great Services Designed to Help You Take
              Control of Diabetes{" "}
            </h4>
          </div>
        </div>
        <hr />

        <h1 className="mt-4">Our pricing plans</h1>
        <div className="row mt-5">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="row">
              <div className="col-md-4">
                <p>
                  $ <span className="text-font">32</span>
                </p>
              </div>
              <div className="col-md-8 blog-text">
                <p className="text">Basic pakeg</p>
                <h3>Services included</h3>
                <hr />
                <p className="text">Dental care</p>
                <p className="text">Primary care visits</p>
                <p className="text">Specialist office visit</p>
                <p className="text">Preventive care</p>
                <p className="text">Vision care</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="row">
              <div className="col-md-4">
                <p>
                  $ <span className="text-font">64</span>
                </p>
              </div>
              <div className="col-md-8 blog-text">
                <p className="text">Advanced package</p>
                <h3>Services included</h3>
                <hr />
                <p className="text">Prenatal care</p>
                <p className="text">Primary care visits</p>
                <p className="text">Emergency room visits</p>
                <p className="text">Preventive care</p>
                <p className="text">Vision care</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="row">
              <div className="col-md-4">
                <p>
                  $ <span className="text-font">80</span>
                </p>
              </div>
              <div className="col-md-8 blog-text">
                <p className="text">Premium package</p>
                <h3>Services included</h3>
                <hr />
                <p className="text">Urgent care</p>
                <p className="text">Delivery services</p>
                <p className="text">Rehabilitation services</p>
                <p className="text">Preventive care</p>
                <p className="text">Surgeon fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
