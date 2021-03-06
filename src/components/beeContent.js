import { render } from '@testing-library/react';
import React from 'react';
import './Content.css';

class beeContent extends React.Component {

    render() {
        return (
         // {this.props.<NameOfInput/placeholder>} //
       <main className="beeContent">
            <img className="content__image" src={this.props.Pic} alt="Image of Bee"/>
            <h2 className="content__title"> {this.props.Title} </h2>
            <p className="content__body"> {this.props.Body} </p>
       </main>
        )
    }
}
export default beeContent;