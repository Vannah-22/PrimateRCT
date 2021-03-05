import { render } from '@testing-library/react';
import React from 'react';
import './Content.css';

class ladybugContent extends React.Component {

    render() {
        return (
         // {this.props.<NameOfInput/placeholder>} //
       <main className="ladybugContent">
            <img className="content__image" src={this.props.ladybugPic} alt="Image of Ladybug"/>
            <h2 className="content__title"> {this.props.ladybugTitle} </h2>
            <p className="content__body"> {this.props.ladybugBody} </p>
       </main>
        )
    }
}
export default ladybugContent;