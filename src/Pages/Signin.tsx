import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = (login) => {
    const [userId, setUserId] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (userId === 'user' && pass === 'pass') {
            login(userId, pass);
            navigate('/dashboard');
        }
    };

    return (
        <div>
            <h2>Signin Page</h2>
            {/* <div>
                <input
                    type="text"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => 
                        setUserId(e.target.value)}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => 
                        setPass(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button> */}
        </div>
    );
};

export default Signin