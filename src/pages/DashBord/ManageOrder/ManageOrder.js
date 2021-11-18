import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const ManageOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [remove, setRemove] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [remove, status]);

  const handleCancel = (id) => {
    const procced = window.confirm(
      "Are you sure you want to remove the order?"
    );
    if (procced) {
      fetch(`http://localhost:5000/remove/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order successfully removed");
            setRemove(!remove);
          }
        });
    }
  };

  const [order, setOrder] = useState({});
  // handle  status
  const handleApproved = (id) => {
    fetch(`http://localhost:5000/allOrders/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
    setOrder(order.status = "Shipped");

    fetch(`http://localhost:5000/allOrders/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Order Successfully Shipped!");
          setStatus(!status);
        }
      });
  };

  return (
    <div className="container my-5">
      <h2 className="my-4">Manage All Orders</h2>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Bike Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((item, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item?.username}</td>
              <td>{item?.email}</td>
              <td>{item?.phone}</td>
              <td>
                {item?.itemName} ({item?.status})
              </td>
              <td>
                <button
                  onClick={() => handleApproved(item?._id)}
                  className="btn btn-primary mx-2"
                >
                  Shipped
                </button>
                <button
                  onClick={() => {
                    handleCancel(item?._id);
                  }}
                  className="btn btn-danger"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageOrder;
