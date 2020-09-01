import React from "react";
import Navbar from '../components/Navbar/Navbar';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import logoImg from '../img/ship.png';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';
import { useAuth0 } from '@auth0/auth0-react';
import Profile from '../components/Profile'
import SearchBoats from "../pages/SearchBoat";


function UserLoginPage() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { logout } = useAuth0();

    return (
        <div>
            <Navbar />
            <Card>
                <Logo src={logoImg} />
                <Form>
                    {/* <Input
                        type="email"
                        placeholder="email"
                    />
                    <Input
                        type="password"
                        placeholder="password"
                    /> */}
                    <LoginButton >Sign In</LoginButton>
                    <LogoutButton >Sign Out</LogoutButton>
                    <Profile />
                </Form>
                {/* <Link to="/signup">Don't have an account?</Link> */}
            </Card>


            {/* <h1>Hello Sailor. Log In Here.</h1>

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
                    <Button>Sign In</Button>
                    <br></br>
                    <Link to="/map">Already have an account?</Link>
                </Form>

            </Card> */}

            {/* <SearchBoats /> */}

        </div>
    )
}

export default UserLoginPage;