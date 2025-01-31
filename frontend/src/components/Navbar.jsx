import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/users">User Management</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
