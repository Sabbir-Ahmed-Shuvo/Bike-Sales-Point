import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageOrder.css";

const ManageOrder = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [remove, setRemove] = useState(false);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    fetch("https://still-beach-60108.herokuapp.com/allregister")
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [remove, status]);

  const handleCancel = (id) => {
    const procced = window.confirm(
      "Are you sure you want to cancel the booking?"
    );
    if (procced) {
      fetch(`https://still-beach-60108.herokuapp.com/remove/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Booking successfully cancelled");
            setRemove(!remove);
          }
        });
    }
  };

  const [booking, setBooking] = useState({});
  // handle  status
  const handleApproved = (id) => {
    fetch(`https://still-beach-60108.herokuapp.com/allregister/${id}`)
      .then((res) => res.json())
      .then((data) => data);
    setBooking((booking.status = "Approved"));

    fetch(`https://still-beach-60108.herokuapp.com/allregister/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Booking  Successfully Approved!");
          setStatus(!status);
        }
      });
  };

  return (
    <div className="container my-5">
      <h2 className="my-4">Manage All Vacation Bookings</h2>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Package Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allBookings.map((allBooking, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{allBooking?.username}</td>
              <td>{allBooking?.email}</td>
              <td>
                {allBooking?.name} (status: {allBooking?.status})
              </td>
              <td>
                <button
                  onClick={() => handleApproved(allBooking?._id)}
                  className="btn btn-primary mx-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => {
                    handleCancel(allBooking?._id);
                  }}
                  className="btn btn-danger"
                >
                  Cancel
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
