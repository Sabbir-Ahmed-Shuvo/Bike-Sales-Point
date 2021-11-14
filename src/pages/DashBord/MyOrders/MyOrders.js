import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import "./MyOrders.css";

const MyOrders = () => {
  const [allBookings, setAllBookings] = useState([]);
  const [remove, setRemove] = useState(false);
  const { user } = useAuth();

  const email = user?.email;

  useEffect(() => {
    fetch(`https://still-beach-60108.herokuapp.com/allregister/${email}`)
      .then((res) => res.json())
      .then((data) => setAllBookings(data));
  }, [remove, email]);

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
  return (
    <div className="container">
      <h1 className="text-uppercase mb-5">My all booked vacations</h1>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Package Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allBookings.map((allBooking, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{allBooking?.name}</td>
              <td>{allBooking?.date}</td>
              <td>
                {allBooking?.status}
                <button
                  onClick={() => {
                    handleCancel(allBooking?._id);
                  }}
                  className="btn btn-danger ms-3"
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

export default MyOrders;
