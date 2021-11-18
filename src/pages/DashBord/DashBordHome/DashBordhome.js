import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
import AddProduct from "../AddProduct/AddProduct";
import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageProduct from "../ManageProduct/ManageProduct";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";

const DashBordhome = () => {
  let { path, url } = useRouteMatch();
  const { logOut, user, admin } = useAuth();
  return (
    <div style={{ minHeight: "500px" }}>
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="/">Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Options
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="ps-4">
              <Nav className="justify-content-end flex-grow-1 pe-3 nav-items">
                <Nav.Link href="/">
                  <Link to='/home'>Home</Link>
                </Nav.Link>
                {admin ?
                  <Nav>
                    <Nav.Link href="/">
                      <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                    </Nav.Link>
                    <Nav.Link href="/">
                      <Link to={`${url}/addProduct`}>Add Product</Link>
                    </Nav.Link>
                    <Nav.Link href="/">
                      <Link to={`${url}/manageOrder`}>Manage Order</Link>
                    </Nav.Link>
                    <Nav.Link href="/">
                      <Link to={`${url}/manageProduct`}>Manage Products</Link>
                    </Nav.Link>
                  </Nav>
                  :
                  <Nav>
                    <Nav.Link href="/">
                      <Link to={`${url}/myOrder`}>My Order</Link>
                    </Nav.Link>
                    <Nav.Link href="/">
                      <Link to={`${url}/payment`}>Payment</Link>
                    </Nav.Link>
                    <Nav.Link href="/">
                      <Link to={`${url}/addReview`}>Add Review</Link>
                    </Nav.Link>
                  </Nav>
                }
                <button onClick={logOut} className="btn btn-outline-danger">
                  Log Out
                </button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div>
        <Switch>
          <Route exact path={`${path}`}>
            <h1 className="text-info mt-5 pt-5">Welcome To User Dashboard</h1>
            <h1 className="text-warning">Explore your Dashboard</h1>
          </Route>
          <Route path={`${path}/myOrder`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
          <AdminRoute path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </AdminRoute>
          <AdminRoute path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </AdminRoute>
        </Switch>
      </div>
    </div>
  );
};

export default DashBordhome;
