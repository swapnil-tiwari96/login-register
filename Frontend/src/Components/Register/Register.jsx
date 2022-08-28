import React, { useState } from "react";
import axios from 'axios'
import './Register.css'

const Register = () =>
{
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
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

    const register = () =>
    {
        const { firstName, lastName, email, password } = user
        if (firstName && lastName && email && password)
        {
            axios.post("http://localhost:3001/register", user)
                .then(res => alert(res.data))

        } else
        {
            alert("Invalid input");
        }
    }

    return (
        <div className="register">
            <input type="text" name="firstName" value={user.firstName} placeholder="First Name" onChange={handleChange} />
            <input type="text" name="lastName" value={user.lastName} placeholder="Last name" onChange={handleChange} />
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange} />
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} />
            <button onClick={register}>Register</button>
            <div>or</div>
            <button>Login</button>
        </div>
    )
};

export default Register;