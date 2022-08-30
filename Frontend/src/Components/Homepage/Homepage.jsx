import React, { useState, useEffect } from "react";
import Pagination from "./Pagination/Pagination";
import './Homepage.css';
import axios from 'axios'

const Homepage = () =>
{
    const [userList, setUserList] = useState([]);
    const [valueOf, setValueOf] = useState("");
    const [order, setOrder] = useState("ASC");
    const [currentPage, setCurrentPage] = useState(1)
    const [listPerPage] = useState(2)

    useEffect(() =>
    {
        axios.get("https://login-register-swap.herokuapp.com/getData")
            .then(res => setUserList(res.data))
            .catch(err => console.log(err))
    }, [])

    //Get current posts
    const indexOfLastPost = currentPage * listPerPage;
    const indexOfFirstPost = indexOfLastPost - listPerPage;
    const currentList = userList.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    // Sorting
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
        else if (order === 'DSC')
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
            {/* Search */}
            <input type="text" placeholder="Search" value={valueOf} onChange={(e) => setValueOf(e.target.value)} />
            <table>
                <thead>
                    <tr>
                        <th onClick={() => sorting('firstName')}>First Name</th>
                        <th onClick={() => sorting('lastName')}>Last Name</th>
                        <th onClick={() => sorting('email')}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {currentList
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
                <Pagination listPerPage={listPerPage} totalList={userList.length} paginate={paginate} />
            </table>
            <div>

            </div>
        </div>
    );
};

export default Homepage;
