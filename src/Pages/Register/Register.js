import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Register.css'

const Register = () => {
    return (
        <div className="register_container d-flex align-items-center justify-content-center">
            <div className="register_box text-center">
                <h1 className="mb-4">Please Register</h1>
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Enter your full name"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="enter your name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <p>Passwords must be at least 6 characters.</p>
                    <FloatingLabel controlId="floatingPassword" label="Re-enter Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <Button className="mt-4 mb-3 form_btn" variant="primary">Register</Button>
                    <p>Or</p>
                    <Button variant="danger">Sign in with Google</Button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Register;