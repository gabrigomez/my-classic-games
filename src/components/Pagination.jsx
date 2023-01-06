import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.css';

export const Pagination = ({ gamesPerPage, totalGames, paginate }) => {
  const pageNumbers = [];

  for (let i= 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
  };

  return (
    <nav className='pagination-nav'>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <Link onClick={() => paginate(number)} className='page-link'>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};