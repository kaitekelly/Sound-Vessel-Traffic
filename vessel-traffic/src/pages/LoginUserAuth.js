import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../img/ship.png';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';

function Login() {
    return(
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="password" />
                <Button>Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account?</Link>
        </Card>
    );
}

export default Login;