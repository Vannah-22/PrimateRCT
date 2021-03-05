import logo from './media/images/bee-logo.png';
import React from 'react';

import './Header.css'; // seperate files to import so that the user only needs to load (in the browser) what they need, not ALL of it //

class Header extends React.Component {

    render() {
        return (     
            // BEM ('BlockElementModifier') naming convention
            // used to create class name uniqueness and makes css maintanable especially when our projects bigger
            <header className = "header">
                <h1 className="header__title"> Insectopedia </h1>
                <img className="header__logo" alt="Bee_Logo" src={logo}></img>
            </header>
        )
    }
}

export default Header;
