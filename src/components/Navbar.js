import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.css'; // seperate files to import so that the user only needs to load (in the browser) what they need, not ALL of it //

class Navbar extends React.Component {

    render() {
        return (     
            <nav className="navbar">
                <NavLink to="/" className="navbar__link"> Home </NavLink> 
                <NavLink to="/bees" className="navbar__link"> Bees </NavLink>
                <NavLink to="/ladybugs" className="navbar__link"> Ladybugs </NavLink>
            </nav>
        )
    }
}
export default Navbar;