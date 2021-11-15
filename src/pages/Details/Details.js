import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Details.css";

const Details = () => {
  const [user, setUser] = useState([]);

  const { serviceId } = useParams();
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  const exatItem = user.find((item) => item.id === parseInt(serviceId));
  console.log(exatItem);
  return (
    <div>
      <h2 className="mt-5 text-primary">This is Details {serviceId}</h2>
      <div className="servicsCard">
        <div className="card-bg" style={{ width: "18rem" }}>
          <img src={exatItem?.img} className="card-img-top p-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title card-text">{exatItem?.name}</h5>
            <p className="card-text card-text">
              {exatItem?.description.slice(0, 100)}
            </p>
            <h4 className="card-text card-text">{exatItem?.price}</h4>
            <Link to="/services">
              <button className="btn btn-warning">Go Home Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
