import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import useAuth from "../../hooks/useAuth";
import { Nav, Navbar } from "react-bootstrap";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        sticky="top"
        collapseOnSelect
        expand="lg"
        className="pe-4"
      >
        <Navbar.Brand href="#home">
          <h2 className="text-white px-4">Bike Sales Point</h2>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/services">
            Explore
          </Nav.Link>
          <Navbar.Text>
            {user.email ? (
              <Nav>
                <Nav.Link className="text-primary" as={Link} to="/dashboard">
                  Dashboard
                </Nav.Link>
                <span className="mx-2 mt-2 text-white">{user.displayName} </span>
                <button className="btn btn-outline-danger ms-2" onClick={logOut}>Log Out</button>
              </Nav>
            ) : (
              <Link to="login">LogIn</Link>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
