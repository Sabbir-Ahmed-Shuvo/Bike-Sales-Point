import React, { useState, useEffect } from "react";
import { Card, Col, Row, Spinner } from "react-bootstrap";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    fetch("https://aqueous-plains-63924.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [remove]);

  // remove a product
  const handleRemoveProduct = (id) => {
    const proceed = window.confirm("Are you sure you want to remove?");
    if (proceed) {
      fetch(`https://aqueous-plains-63924.herokuapp.com/removeProducts/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Product successfully removed!");
            setRemove(!remove);
          }
        });
    }
  };
  return (
    <div className="container mt-3 text-center">
      <h2 className="fw-bold text-uppercase mb-4">
        Manage All<span className="text-info"> Products</span>{" "}
      </h2>
      {products.length ? (
        <Row
          xs={1}
          md={3}
          className="gy-5 gx-4 text-start container mx-auto mb-4"
        >
          {products.map((product) => (
            <Col key={product?._id}>
              <Card className="px-2 py-2">
                <Card.Img
                  variant="top"
                  src={product?.img}
                  className="px-2 mx-auto"
                  height="150px"
                />
                <Card.Body className="text-center">
                  <Card.Title className="text-uppercase">
                    {product?.name}
                  </Card.Title>
                  <Card.Text className="text-secondary px-4">
                    {product?.description.slice(0, 50)}
                  </Card.Text>
                  <Card.Text>
                    <h4 className="fs-5">Price: ${product?.price}.00</h4>
                  </Card.Text>
                  <button
                    onClick={() => handleRemoveProduct(product?._id)}
                    className="btn btn-danger text-white w-100"
                  >
                    Remove
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner className="my-5" animation="border" variant="primary" />
        </div>
      )}
    </div>
  );
};

export default ManageProduct;
