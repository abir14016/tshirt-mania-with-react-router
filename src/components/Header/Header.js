import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/invoice">Invoice</Link>
                {/* <Link to="/cart">Cart</Link> */}
                <Link to="/about">About</Link>
            </nav>
        </div>
    );
};

export default Header;

