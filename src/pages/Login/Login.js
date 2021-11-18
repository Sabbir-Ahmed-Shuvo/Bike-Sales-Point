import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { singInWithGoogle, emailPasswordSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'


    const handleGoogleLogin = () => {
        singInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleLogIn = (e) => {
        e.preventDefault()
        emailPasswordSignIn(email, password)
            .then(result => {
                history.push(redirect_uri)
            })
            .catch(error => {
                setError("Invalid email and password")
            })
    }

    return (
        <div className="container">
            <div className="from-width mx-auto mt-5">
                <h2 className="mb-3">Login</h2>
                <Form onSubmit={handleLogIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Log in
                    </Button>
                    <p>
                        {error}
                    </p>
                </Form>
                <p>new to medical and healthcare center? <Link to="/register">Create Account</Link></p>
                <div>---------or-------</div>
                <button className="btn btn-warning w-100"
                    onClick={handleGoogleLogin}
                >Google Sign in</button>
            </div>
        </div>
    );
};

export default Login;