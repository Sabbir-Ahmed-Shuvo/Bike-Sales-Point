import React from 'react';
import { useForm } from "react-hook-form";


const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
    const email = data.email;
    fetch(`http://localhost:5000/makeAdmin/${email}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          alert('Successfully added admin')
          reset()
        }
        else {
          alert('Failed to add! No user found! or Already added!')
        }
      })
  };

  // add new tour section
  return (
    <div className="container my-5 text-center">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <div className="pb-5 pt-3 rounded-3 mx-auto shadow-lg">
            <h3 className="my-4 text-uppercase purple-text">Make An Admin</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                {...register("email", { required: true })}
                className="form-control w-75 mx-auto"
                placeholder="User Email"
              />
              <button
                type="submit"
                className="btn btn-outline-info mt-3 w-75 mx-auto py-2 px-3" >Add
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default MakeAdmin;