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
        axios.post("https://login-register-swap.herokuapp.com/login", user)
            .then(res =>
            {
                if (res.data.token)
                {
                    alert(res.data.message)
                    setLoginUser(res.data.user)
                    navigate('/')
                }

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
