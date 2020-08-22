import React from "react";
import Navbar from '../components/Navbar/Navbar';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import logoImg from '../img/ship.png';
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForm';


function SignUpPage() {
    return (
        <div>
            <Navbar />
            <Card>
                <Logo src={logoImg} />
                <Form>
                    <Input
                        type="email"
                        placeholder="email"
                    />
                    <Input
                        type="password"
                        placeholder="password"
                    />
                    <Input
                        type="password"
                        placeholder="retype password"
                    />
                    <Button>Sign Up</Button>
                </Form>
                <Link to="/signup">Don't have an account?</Link>
            </Card>


            {/* <h1>Sign Up Here</h1>
            <Card style={{ boxSizing: "border-box", maxWidth: "500px", textAlign: "center" }}>
                <Form>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button>Sign Up</Button>
                    <br></br>
                    <Link to="/userlogin">Already have an account?</Link>
                </Form>
            </Card> */}
        </div>
    )
}

export default SignUpPage;