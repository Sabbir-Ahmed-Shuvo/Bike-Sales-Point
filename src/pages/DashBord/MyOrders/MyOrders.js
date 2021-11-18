import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const [myOrder, setMyOrder] = useState([]);
  const [remove, setRemove] = useState(false);
  const { user } = useAuth();

  const email = user?.email;

  useEffect(() => {
    fetch(`https://aqueous-plains-63924.herokuapp.com/myOrder/${email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [remove, email]);

  const handleCancel = (id) => {
    const procced = window.confirm(
      "Are you sure you want to cancel the order?"
    );
    if (procced) {
      fetch(`https://aqueous-plains-63924.herokuapp.com/remove/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order successfully cancelled");
            setRemove(!remove);
          }
        });
    }
  };
  return (
    <div className="container">
      <h1 className="text-uppercase mb-5">My all ordered bikes</h1>
      <Table responsive="sm" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Bike Name</th>
            <th>Bike Price</th>
            <th>Order Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {myOrder.map((order, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{order?.itemName}</td>
              <td>$ {order?.price}</td>
              <td>{order?.date}</td>
              <td>
                {order?.status}
                <button
                  onClick={() => {
                    handleCancel(order?._id);
                  }}
                  className="btn btn-danger ms-3 mt-1"
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
