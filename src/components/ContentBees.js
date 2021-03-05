import React from 'react';

import './Content.css'; // seperate files to import so that the user only needs to load (in the browser) what they need, not ALL of it //
import Content from './beeContent';

class ContentBees extends React.Component {
    render() {
        return (    
            <Content 
                beePic="https://cdn.pixabay.com/photo/2019/01/13/13/43/honey-bee-3930374_960_720.jpg"
                beeTitle="Bee"
                beeBody= "This is a picture of a bee."
            />

        )
    }
}
export default ContentBees;