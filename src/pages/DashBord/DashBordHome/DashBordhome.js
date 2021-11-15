import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AddReview from "../AddReview/AddReview";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageProduct from "../ManageProduct/ManageProduct";
import MyOrders from "../MyOrders/MyOrders";
import Payment from "../Payment/Payment";

const DashBordhome = () => {
  let { path, url } = useRouteMatch();
  const { logOut } = useAuth();
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
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 nav-items">
                <Nav.Link href="/">
                  <Link to={`${url}/myOrder`}>My Order</Link>
                </Nav.Link>
                <Nav.Link href="/">
                  <Link to={`${url}/manageOrder`}>Manage Order</Link>
                </Nav.Link>
                <Nav.Link href="/">
                  <Link to={`${url}/manageProduct`}>Manage Products</Link>
                </Nav.Link>
                <Nav.Link href="/">
                  <Link to={`${url}/makeAdmin`}>Make Admin</Link>
                </Nav.Link>
                <Nav.Link href="/">
                  <Link to={`${url}/payment`}>Payment</Link>
                </Nav.Link>
                <Nav.Link href="/">
                  <Link to={`${url}/addReview`}>Add Review</Link>
                </Nav.Link>
                <button onClick={logOut} className="btn btn-danger">
                  Log Out
                </button>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div>
        <Switch>
          <Route path={`${path}/myOrder`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </Route>
          <Route path={`${path}/manageProduct`}>
            <ManageProduct></ManageProduct>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/payment`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default DashBordhome;
