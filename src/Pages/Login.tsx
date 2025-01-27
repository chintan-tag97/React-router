// 5. Create example for how we can ask for confirmation before we're changing or route-back to other page

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        const confirmNavigation = window.confirm("Are you sure you want to go to the Home page?");
        if (confirmNavigation) {
            navigate("/");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleNavigation}>Home</button>
        </div>
    );
}

export default Login;
