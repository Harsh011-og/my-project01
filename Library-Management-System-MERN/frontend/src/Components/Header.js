import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import { Menu, Clear } from '@material-ui/icons';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div className="header">
            {/* Logo Section */}
            <div className="logo-nav">
                <Link to="/" aria-label="Home">
                    LIBRARY
                </Link>
            </div>

            {/* Search Input */}
            <input
                className="search-input"
                type="text"
                placeholder="Search a Book"
            />

            {/* Navigation Menu */}
            <ul className={menuOpen ? 'nav-options active' : 'nav-options'}>
                <li className="option" onClick={closeMenu}>
                    <Link to="/" aria-label="Home">Home</Link>
                </li>
                <li className="option" onClick={closeMenu}>
                    <Link to="/books" aria-label="Books">Books</Link>
                </li>
                <li className="option" onClick={closeMenu}>
                    <Link to="/signin" aria-label="SignIn">Sign In</Link>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div
                className="mobile-menu"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? (
                    <Clear className="menu-icon" style={{ fontSize: 40 }} />
                ) : (
                    <Menu className="menu-icon" style={{ fontSize: 40 }} />
                )}
            </div>
        </div>
    );
}

export default Header;
