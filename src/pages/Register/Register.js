import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const { emailPasswordSignUp } = useAuth();
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [error, setError] = useState("");
  const [errorText, setErrorText] = useState("");

  const history = useHistory();


  const getEmail = (e) => {
    setEmail(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const getName = (e) => {
    setName(e.target.value);
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setErrorText("password must be at least 6 characters");
      setError("");
    } else {
      setErrorText("");
    }
    emailPasswordSignUp(email, password, name, history);
  };


  return (
    <div className="container">
      <div className="from-width mx-auto mt-5">
        <h2>Register: Create Account</h2>
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onBlur={getName}
              type="text"
              placeholder="Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              onBlur={getEmail}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onBlur={getPassword}
              type="password"
              placeholder="Password"
            />
            <Form.Text className="text-muted">
              We'll never share your info with anyone else.
            </Form.Text>
          </Form.Group>
          <p>{error}</p>
          <p>{errorText}</p>
          <Button variant="primary" className="w-100" type="submit">
            Sign Up
          </Button>
        </Form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
