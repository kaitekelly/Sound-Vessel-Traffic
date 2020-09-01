import React, { Profiler } from "react";
import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <h5>Signed in as: {user.name}</h5>
                {/* <p>{user.email}</p> */}
                {/* {JSON.stringify(user, null, 2)} */}
            </div>
        )
    )
}

export default Profile;