import React from 'react';

import './ContentHome.css'; // seperate files to import so that the user only needs to load (in the browser) what they need, not ALL of it //

class ContentHome extends React.Component {

    render() {
        return (    
            <div className="content--home"> 
                Here is the homepage
            </div> 

        )
    }
}

export default ContentHome;