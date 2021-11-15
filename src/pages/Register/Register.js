import { getAuth, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [errorText, setErrorText] = useState("");
  const { emailPasswordSignUp } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";
  const auth = getAuth();

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
      setErrorText("password must be gaterthen six character");
      setError("");
    } else {
      setErrorText("");
    }
    emailPasswordSignUp(email, password, name)
      .then((result) => {
        history.push(redirect_uri);
        window.location.reload();
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .catch((error) => {
        setError("Email already taken");
      });
  };
  return (
    <div className="container">
      <div className="from-width mx-auto mt-5">
        <h2>Register: Create Account</h2>
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onBlur={getName}
              type="text"
              placeholder="Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={getEmail}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={getPassword}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <p>{error}</p>
          <p>{errorText}</p>
          <Button variant="primary" type="submit">
            Submit
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
