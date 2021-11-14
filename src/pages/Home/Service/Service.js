import React from "react";
import { Link } from "react-router-dom";
import "./service.css";
const Service = ({ service }) => {
  const { id, name, img, description, price } = service;
  return (
    <div className="card-bg">
      <img className="w-100" height="250px" src={img} alt="" />
      <h4 className="mt-3">{name}</h4>
      <p className="mt-3" style={{ textAlign: "justify" }}>
        {description}
      </p>
      <h4 style={{ textAlign: "justify" }}>Price: {price}</h4>
      <div>
        <Link to={`/details/${id}`}>
          <button className="btn btn-warning">Buy Product</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
