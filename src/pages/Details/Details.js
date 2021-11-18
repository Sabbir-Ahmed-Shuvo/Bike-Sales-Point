import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Card } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const Details = () => {
  const { productId } = useParams();
  const { user } = useAuth();
  const [product, setProduct] = useState({});
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://aqueous-plains-63924.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const onSubmit = (data) => {
    data.status = "Pending";
    data.price = product?.price;
    data.img = product?.img;
    fetch("https://aqueous-plains-63924.herokuapp.com/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Bike Successfully Ordered!");
          reset();
        }
      });
  };

  return (
    <div className="container my-5 pt-3">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 col-12">
          <Card className="bg-dark text-white">
            <Card.Img
              src={product?.img}
              alt="Card image"
              style={{ opacity: 0.4 }}
            />
            <Card.ImgOverlay className="p-4">
              <Card.Title className="fs-3 mt-5">{product?.name}</Card.Title>
              <Card.Text>{product?.description}</Card.Text>
              <Card.Text className="fs-3">Price: $ {product?.price}</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-md-3"></div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 col-12 text-center mt-5">
          <div className="py-5 border rounded-3 mx-auto shadow-lg animate__animated animate__backInDown">
            <h3 className="my-3 text-uppercase purple-text">Order Now Form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              {user?.displayName && (
                <input
                  defaultValue={user?.displayName}
                  {...register("username", { required: true })}
                  className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0"
                  placeholder="Full Name"
                />
              )}
              {user?.email && (
                <input
                  defaultValue={user?.email}
                  {...register("email", { required: true })}
                  className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 my-3"
                  placeholder="Username or email"
                />
              )}
              <input
                type="tel"
                {...register("phone", { required: true })}
                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3"
                placeholder="Phone Number"
              />
              {errors.phone && (
                <span className="text-danger">*This field is required</span>
              )}
              <input
                {...register("address", { required: true })}
                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3"
                placeholder="Address"
              />
              {errors.address && (
                <span className="text-danger">*This field is required</span>
              )}
              <input
                type="date"
                {...register("date", { required: true })}
                className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3"
                placeholder="Date"
              />
              {errors.date && (
                <span className="text-danger">*Give the order date</span>
              )}
              {product?.name && (
                <input
                  defaultValue={product?.name}
                  {...register("itemName", { required: true })}
                  className="form-control w-75 mx-auto border-bottom border-dark border-top-0 border-start-0 border-end-0 mt-3 "
                  placeholder="Tour title"
                />
              )}
              <input
                type="submit"
                value="Order Now"
                className="btn btn-outline-info w-75 mt-4"
              />
            </form>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Details;
