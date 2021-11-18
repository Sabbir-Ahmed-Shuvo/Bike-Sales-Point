import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const AddReview = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("https://aqueous-plains-63924.herokuapp.com/addReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Your Review Successfully Added!");
          reset();
        }
      });
  };

  return (
    <div className="container my-3 text-center">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 animate__animated animate__backInUp">
          <div className="pb-5 pt-3 rounded-3 mx-auto shadow-lg">
            <h4 className="my-4 text-uppercase purple-text">Give A Review</h4>
            <form onSubmit={handleSubmit(onSubmit)}>
              {user?.displayName && (
                <input
                  {...register("name")}
                  defaultValue={user?.displayName}
                  className="form-control w-75 mx-auto"
                />
              )}
              {user?.email && (
                <input
                  {...register("email")}
                  className="form-control w-75 my-4 mx-auto"
                  defaultValue={user?.email}
                />
              )}
              <textarea
                {...register("message", { required: true })}
                className="form-control w-75 mx-auto"
                placeholder="Message"
              />
              <input
                {...register("rating", { required: true, min: 0, max: 5 })}
                className="form-control w-75 mx-auto my-4"
                placeholder="Rating out of 5"
              />
              <button
                type="submit"
                className="btn btn-outline-info w-75 mx-auto py-2 px-3"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default AddReview;
