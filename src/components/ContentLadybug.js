import React from 'react';

import './ContentLadybug.css'; 
import Content from './Content';

class ContentLadybug extends React.Component {
    render() {
        return (    
            <Content 
                Pic="https://cdn.pixabay.com/photo/2020/05/23/09/57/ladybug-5208889_960_720.jpg"
                Title="Ladybug"
                Body = "This is a picture of a ladybug."
                Emoji = "🐞"
            />

        )
    }
}
export default ContentLadybug;