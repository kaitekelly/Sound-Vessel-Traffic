import React, { useState } from "react";
import Navbar from '../components/Navbar/Navbar';
// import Card from 'react-bootstrap/Card';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
import logoImg from '../img/ship.png';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';
import API from "../utils/API";

function SignUpPage() {
    // const [user, setUser] = useState("");
    const [userObject, setUserObject] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserObject({...userObject, [name]: value})
        console.log(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("I'm a new user")
            API.saveUser({
                first_name: userObject.first_name,
                last_name: userObject.last_name,
                username: userObject.email,
                password: userObject.password
            })
            console.log(userObject)
            setUserObject({
                first_name: "",
                last_name: "",
                email: "",
                password: ""
        
            });
    }

    return (
        <div>
            <Navbar />
            <Card>
                <Logo src={logoImg} />
                <Form>
                    <Input
                        type="text"
                        placeholder="first name"
                        // value={userObject.first_name}
                        name="first_name"
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        placeholder="last name"
                        // value={userObject.last_name}
                        name="last_name"
                        onChange={handleInputChange}
                    />
                    <Input
                        type="email"
                        placeholder="email"
                        // value={userObject.email}
                        name="email"
                        onChange={handleInputChange}
                    />
                    <Input
                        type="password"
                        placeholder="password"
                        // value={userObject.password}
                        name="password"
                        onChange={handleInputChange}
                    />
                    <Input
                        type="password"
                        placeholder="retype password"
                        // name="password"
                        // onChange={handleInputChange}
                    />
                    <Button 
                    onClick={handleFormSubmit}
                    >Sign Up</Button>
                </Form>
                {/* <Link to="/signup">Don't have an account?</Link> */}
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