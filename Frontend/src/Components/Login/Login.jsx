import React, { useState } from "react";
import './Login.css'

const Login = () =>
{
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleChange = e =>
    {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    return (
        <div className="login">
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange} />
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} />
            <button className="login-button">Login</button>
            <div>or</div>
            <button className="register-button">Register</button>
        </div>
    )
};

export default Login;
