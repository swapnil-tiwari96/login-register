import React, { useState } from "react";
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

    return (
        <div>
            <input type="text" name="firstName" value={user.firstName} placeholder="First Name" onChange={handleChange} />
            <input type="text" name="lastName" value={user.lastName} placeholder="Last name" onChange={handleChange} />
            <input type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange} />
            <input type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} />
            <button>Register</button>
            <div>or</div>
            <button>Login</button>
        </div>
    )
};

export default Register;