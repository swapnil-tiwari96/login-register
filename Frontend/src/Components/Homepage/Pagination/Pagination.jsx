import React from "react";
import { useParams } from "react-router-dom";
import './Pagination.css'

const Pagination = ({ listPerPage, totalList, paginate }) =>
{
    const { pageNumber } = useParams
    const pageNumbers = []
    for (let i = 1; i < Math.ceil(totalList / listPerPage); i++)
    {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number =>
                (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} href={pageNumber} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;
