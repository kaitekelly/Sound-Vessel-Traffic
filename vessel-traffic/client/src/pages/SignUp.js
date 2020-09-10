import React, { useState } from "react";
import Navbar from '../components/Navbar/Navbar';
import { useHistory } from "react-router-dom";
import { Image, Container, Form, Button } from "react-bootstrap"
import logoImg from '../img/ship.png';
import API from "../utils/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignUpPage() {
    const [userObject, setUserObject] = useState({
        first_name: "",
        last_name: "",
        username: "",
        password: ""
    })

    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserObject({ ...userObject, [name]: value })
        console.log(value)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log("I'm a new user")
        API.saveUser({
            first_name: userObject.first_name,
            last_name: userObject.last_name,
            username: userObject.username,
            password: userObject.password
        })
        console.log(userObject)
        setUserObject("");
        toasty();
        setTimeout(() => {
            history.push("/plantrip")
        }, 2000);
    }

    function toasty() {
        console.log("User logged in!")
        toast("Welcome to Sound Vessel Traffic!", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div>
            <Navbar />
            <Container style={{ width: '25rem', textAlign: 'center' }}>
            <Image src={logoImg} alt="My logo" />
                <Form width="50%">
                    <Form.Control
                        type="text"
                        placeholder="first name"
                        name="first_name"
                        onChange={handleInputChange}
                    />
                    <Form.Control
                        type="text"
                        placeholder="last name"
                        name="last_name"
                        onChange={handleInputChange}
                    />
                    <Form.Control
                        type="email"
                        placeholder="email"
                        name="username"
                        onChange={handleInputChange}
                    />
                    <Form.Control
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleInputChange}
                    />
                    <Form.Control
                        type="password"
                        placeholder="retype password"
                    />
                    <Button
                        onClick={(event) => { handleFormSubmit(event) }} variant="primary" type="submit"
                    >Sign Up</Button>
                    <ToastContainer autoClose={4000} />
                </Form>
            </Container>


        </div>
    )
}

export default SignUpPage;