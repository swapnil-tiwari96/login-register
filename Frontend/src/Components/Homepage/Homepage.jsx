import React, { useState, useEffect } from "react";
import './Homepage.css';
import axios from 'axios'

const Homepage = () =>
{
    const [userList, setUserList] = useState([])
    const [valueOf, setValueOf] = useState("")
    const [order, setOrder] = useState("ASC")

    useEffect(() =>
    {
        axios.get("http://localhost:3001/getData")
            .then(res => setUserList(res.data))
            .catch(err => console.log(err))
    }, [])

    const sorting = (col) =>
    {
        if (order === 'ASC')
        {
            const sorted = [...userList]
                .sort((a, b) =>
                    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
                )
            setUserList(sorted)
            setOrder('DSC')
        }
        if (order === 'DSC')
        {
            const sorted = [...userList]
                .sort((a, b) =>
                    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
                )
            setUserList(sorted)
            setOrder('ASC')
        }
    }

    return (
        <div>
            <input type="text" placeholder="Search" value={valueOf} onChange={(e) => setValueOf(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th onClick={sorting('firstName')}>First Name</th>
                        <th onClick={sorting('lasttName')}>Last Name</th>
                        <th onClick={sorting('email')}>Email</th>
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
