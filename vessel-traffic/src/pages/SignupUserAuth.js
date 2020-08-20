import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../img/ship.png';
import { Card, Logo, Form, Input, Button } from '../components/AuthForm';
import SignUpPage from './SignUp';

function SignUp() {
    return (
        <Card>
            <Logo src={logoImg} />
            <Form>
                <Input type="email" placeholder="email" />
                <Input type="password" placeholder="password" />
                <Input type="password" placeholder="password again" />
                <Button>Sign Up</Button>
            </Form>
            <Link to="/login">Already have an account?</Link>
        </Card>
    );
}

export default SignUp;