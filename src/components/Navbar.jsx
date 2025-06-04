import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Online Library</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/browse">Browse Books</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
}

// export default Navbar;

export default Navbar;