import Service from "../Service/Service";
import "./Services.css";
const { useState, useEffect } = require("react");

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-plains-63924.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="services-container">
      {services.map((service) => (
        <Service key={service._id} service={service}></Service>
      ))}
    </div>
  );
};

export default Services;
