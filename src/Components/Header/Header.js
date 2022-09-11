import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>This is Header Component</h2>
            <nav className="navarea">
                <a href="/one">One</a>
                <a href="/two">Two</a>
                <a href="/three">Three</a>
            </nav>
        </div>
    );
};

export default Header;