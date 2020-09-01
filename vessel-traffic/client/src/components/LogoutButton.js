import React from 'react';
import { Button } from '../components/AuthForm';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return(
        isAuthenticated && (
            <Button onClick={() => logout()}>
                Sign Out
            </Button>
        )
    )
}

export default LogoutButton;