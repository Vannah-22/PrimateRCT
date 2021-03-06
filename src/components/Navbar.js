import React from 'react';
import {NavLink} from 'react-router-dom';

import './Navbar.css'; // seperate files to import so that the user only needs to load (in the browser) what they need, not ALL of it //

class Navbar extends React.Component {

    render() {
        return (     
           
            <nav className={`navbar ${this.props.color}`}>
                

                <NavLink to="/" className="navbar__link"
                    onClick={this.props.setColor()}> Home {/* When I click on the bees Navlink, change color to default */}
                </NavLink> 

                <NavLink to="/bees" className="navbar__link"
                    onClick={this.props.setColor("green")}> Bees 
                    {/* When I click on the bees Navlink, change properties to the 
                    properties from the .green class (from Navbar.css). */}
                </NavLink>

                <NavLink to="/ladybugs" className="navbar__link"
                    onClick={this.props.setColor("purple")}> Ladybugs 
                    {/* When I click on the ladybugs Navlink, change properties to the 
                    properties from the .pruple class (from Navbar.css). */}
                    </NavLink>
                </NavLink>

            </nav>
        )
    }
}
export default Navbar;