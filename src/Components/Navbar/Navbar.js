import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="search-bar">
                Search Bar
            </div>
            <div className="buttons">
                <button>Categories</button>
                <button>Website Builders</button>
                <button>Today's deals</button>
            </div>
        </div>
    );
};

export default Navbar;
