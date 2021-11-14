import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import navlogo from "../../Images/icon/logo-footer-img-1-300x78.png";
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
          <img width="75%" className="p-0" src={navlogo} alt="" />
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/home">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/services">
            Explore
          </Nav.Link>
          <Nav.Link as={Link} to="/dashbord">
            DashBord
          </Nav.Link>
          <Navbar.Text>
            <span style={{ color: "white" }}>{user.displayName} </span>
            {user.email ? (
              <button onClick={logOut}>Log Out</button>
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
