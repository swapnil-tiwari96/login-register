import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import './Login.css'
import axios from 'axios'

const Login = ({ setLoginUser }) =>
{
    let navigate = useNavigate()

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

    const login = () =>
    {
        axios.post("http://localhost:3001/login", user)
            .then(res =>
            {
                alert(res.data.message)
                setLoginUser(res.data.user)
                navigate('/dashboard', { replace: true })
            })
    }

    return (
        <div className="login">
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange} />
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} />
            <button onClick={login}>Login</button>
            <div>or</div>
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
    )
};

export default Login;
