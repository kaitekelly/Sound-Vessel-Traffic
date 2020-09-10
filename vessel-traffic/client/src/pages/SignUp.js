import React, { useState } from "react";
import Navbar from '../components/Navbar/Navbar';
import { useHistory } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import Button from "react-validation/build/button";
import { Card } from "react-bootstrap"

// import logoImg from '../img/ship.png';
// import { Card, Logo, Form, Input, Button } from '../components/AuthForm';
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
        setUserObject({...userObject, [name]: value})
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
            <Card>
                {/* <Logo src={logoImg} /> */}
                <Form>
                    <Input
                        type="text"
                        placeholder="first name"
                        name="first_name"
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        placeholder="last name"
                        name="last_name"
                        onChange={handleInputChange}
                    />
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
                    <Input
                        type="password"
                        placeholder="retype password"
                    />
                    <Button 
                    onClick={(event) => { handleFormSubmit(event)}} variant="primary" type="submit"
                    >Sign Up</Button>
                    <ToastContainer autoClose={4000} />
                </Form>
            </Card>


        </div>
    )
}

export default SignUpPage;