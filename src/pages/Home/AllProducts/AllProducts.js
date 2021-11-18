import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="services-container">
      {products.length ?
        products.slice(0, 6).map((service) => (
          <Service key={service._id} service={service}></Service>
        ))

        :
        <div>
          <Spinner className="my-5" animation="border" variant="primary" />
        </div>
      }
    </div>
  );
};

export default AllProducts;
