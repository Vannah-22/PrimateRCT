import copyright from './components/media/images/copyright-logo.png';
import React from 'react';

import './Footer.css'; 

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <img className="footer__cprt" alt="copyright" src={copyright}> </img>
                <p className="footer__copyrightText"> Copyright Vanessa 2021 </p>
            </footer>
        )
     }
}
export default Footer;
