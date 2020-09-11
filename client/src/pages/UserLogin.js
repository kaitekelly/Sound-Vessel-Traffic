import React, { useState } from "react";
import Navbar from '../components/Navbar/Navbar';
import { Link, useHistory } from "react-router-dom";
import logoImg from '../img/ship.png';
import API from "../utils/API";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Image, Container, Form, Button } from "react-bootstrap"

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
                setUserObject("");
                toasty();
                setTimeout(() => {
                    history.push("/plantrip")
                }, 2000);
        }
    }


    // function handleFormSubmit() {
    //     console.log("I'm logging in!")
    //     if (userObject.username && userObject.password) {
    //         API.getUser()
    //         .then (result => {
    //             setUserObject("");
    //             toasty();
    //             setTimeout(() => {
    //                 history.push("/plantrip")
    //             }, 2000);
    //         })
    //     }
    // }

    function toasty() {
        toast("Welcome to Sound Vessel Traffic!", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    return (
        <div>
            <Navbar />
            <Container style={{ width: '25rem', textAlign: 'center'}}>
            <Image src={logoImg} alt="My logo" style={{justifyContent: 'center'}} />
                <Form method="post">
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
                    <Button type="submit" onClick={(event) => { handleFormSubmit(event) }}>Sign in</Button>
                    <ToastContainer autoClose={2000} />
                </Form>
                <Link to="/signup">Don't have an account?</Link>
            </Container>
        </div>
    )
}

export default UserLoginPage;