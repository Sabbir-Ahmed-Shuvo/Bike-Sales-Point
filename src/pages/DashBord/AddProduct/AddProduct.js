import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Product Successfully Added!");
          reset();
        }
      });
  };

  // add new tour section
  return (
    <div className="container my-4 text-center">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="pb-5 pt-3 rounded-3 mx-auto shadow-lg">
            <h3 className="my-4 text-uppercase purple-text">Add A Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name", { required: true })}
                className="form-control w-75 mx-auto"
                placeholder="Product Name"
              />
              <input
                {...register("description", { required: true })}
                className="form-control w-75 my-4 mx-auto"
                placeholder="Description"
              />
              <input
                type="number"
                {...register("price", { required: true })}
                className="form-control w-75 mx-auto"
                placeholder="Price"
              />
              <input
                {...register("img", { required: true })}
                className="form-control w-75 mx-auto my-4"
                placeholder="Image Url"
              />
              <button
                type="submit"
                className="btn btn-outline-info w-75 mx-auto py-2 px-3"
              >
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default AddProduct;
