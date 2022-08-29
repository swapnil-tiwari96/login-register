import React, { useState, useEffect } from "react";
import './Homepage.css';
import axios from 'axios'

const Homepage = () =>
{
    const [userList, setUserList] = useState([])
    const [valueOf, setValueOf] = useState("")

    useEffect(() =>
    {
        axios.get("http://localhost:3001/getData")
            .then(res => setUserList(res.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <input type="text" placeholder="Search" value={valueOf} onChange={(e) => setValueOf(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userList
                        .filter(user => user.firstName.toLowerCase().includes(valueOf) ||
                            user.lastName.toLowerCase().includes(valueOf) || user.email.toLowerCase().includes(valueOf))
                        .map(user => (
                            <tr key={user._id}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                            </tr>

                        ))}
                </tbody>
            </table>
            <div>
                <button >Prev</button>
                <button > Next</button>
            </div>
        </div>
    );
};

export default Homepage;
