import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mt-5 footer">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-6 col-lg-3 col-12">
            <div className="pt-3">
              <h2 className="text-white">Bike Sales Point</h2>
              <p className="text mt-3">
                If you need expert medical advice, you are welcome to contact us
                at bike sales point any time. Our lines are open 24/7.
              </p>
              <h2 className="text-white">+ 08002466 7921</h2>
              <p className="text mt-3">
                Email us:{" "}
                <span className="email-color">bcp@qode.com</span>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <div className="pt-3 blog-text">
              <h2 className="text-white">Useful Thinks</h2>
              <p className="text2 mt-4">Bike Test</p>
              <p className="text2">Drive Examination</p>
              <p className="text2">Cheap Rate</p>
              <p className="text2">Special Packages</p>
              <p className="text mt-3">
                Email us:{" "}
                <span className="email-color">bcp@qode.com</span>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <h2 className="text-white mt-3">Latest Blog Posts</h2>
            <div className="pt-4">
              <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                  <p className="text-white">Because Your Life Matters</p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                  <p className="text-white">4 Ways to Use Virtual Care</p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-3"></div>
                <div className="col-md-8">
                  <p className="text-white">The Best Bike Seller</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-12">
            <div className="pt-3 blog-text">
              <h2 className="text-white">Working hours</h2>
              <p className="text2 mt-4">Mon – Fri: 9 a.m. – 5 p.m.</p>
              <p className="text2">Sat – Sun: Closed</p>
              <p className="text2">650 Birmingham St,</p>
              <p className="text2">London 3000, UK</p>
              <p className="text mt-3">
                Email us:{" "}
                <span className="email-color">bcp@qode.com</span>
              </p>
            </div>
          </div>
          <p className="pt-4 text-white">
            © 2021 Qode Interactive, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
