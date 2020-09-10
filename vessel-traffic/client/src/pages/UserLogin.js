import React, { useState } from "react";
import Navbar from '../components/Navbar/Navbar';
import { Link, useHistory } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
// import logoImg from '../img/ship.png';
// import { Form, Input, Logo, Button } from '../components/AuthForm';
import API from "../utils/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card } from "react-bootstrap"

function UserLoginPage() {
    const [userObject, setUserObject] = useState({
        username: "",
        password: ""
    })

    const history = useHistory();

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setUserObject({...userObject, [name]: value})
        console.log(value)
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("I'm logging in!")
        if (userObject.username && userObject.password) {
            API.getUser()
            .then (result => {
                console.log(result)
                setUserObject("");
                toasty();
                setTimeout(() => {
                    history.push("/plantrip")
                }, 2000);

            })
            
        }
    }

    function toasty() {
        toast("Welcome to Sound Vessel Traffic!", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div>
            <Navbar />
            <Card>
                {/* <Logo src={logoImg} /> */}
                <Form method="post">
                    <Input
                        type="email"
                        placeholder="email"
                        name="username"
                        onChange={handleInputChange}
                    />
                    <Input
                        type="password"
                        placeholder="password"
                        name="password"
                        onChange={handleInputChange}
                    />
                    <CheckButton type="submit" onClick={handleFormSubmit}>Sign in</CheckButton>
                    <ToastContainer autoClose={2000} />
                </Form>
                <Link to="/signup">Don't have an account?</Link>
            </Card>
        </div>
    )
}

export default UserLoginPage;