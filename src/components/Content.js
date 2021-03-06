import { render } from '@testing-library/react';
import React from 'react';
import './Content.css';

class Content extends React.Component {

    render() {
        return (
         // {this.props.<NameOfInput/placeholder>} //
       <main className="Content">
            <img className="content__image" src={this.props.Pic} alt="Image of Bug"/>
            <h2 className="content__title"> {this.props.Title} </h2>
            {this.props.Emoji &&
            <span href={this.props.Emoji} target="_blank"
                rel="noreferrer noopener"
                className="content_Emoji"> 🐞
            </span>}
            <p className="content__body"> {this.props.Body} </p>

            {/* TRUTHY OR FALSEY VALUES
            some values in JS return true or false
            null returns false
            undefined returns false
            0 returns false
            1 returns true
            an element with a defined value returns true */}
            { this.props.additionalInfo && 
            <a href={this.props.additionalInfo} target="_blank" 
                rel ="noreferrer noopener" 
                className="content__additional"> Click here to learn more about bees
            </a>
            }

            
       </main>
        )
    }
}
export default Content;