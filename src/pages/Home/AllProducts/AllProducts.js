import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const AllProducts = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services-container">
      {services.slice(0, 6).map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
    </div>
  );
};

export default AllProducts;
