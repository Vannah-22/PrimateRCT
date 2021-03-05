import React from 'react';

import './ContentLadybug.css'; 
import Content from './ladybugContent';

class ContentLadybug extends React.Component {
    render() {
        return (    
            <Content 
                ladybugPic="https://cdn.pixabay.com/photo/2020/05/23/09/57/ladybug-5208889_960_720.jpg"
                ladybugTitle="Ladybug"
                ladybugBody = "This is a picture of a ladybug."
            />

        )
    }
}
export default ContentLadybug;