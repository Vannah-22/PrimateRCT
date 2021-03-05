import React from 'react';
import ReactDOM from 'react-dom';

// props is similar to .this; .this reaches properties of an object //
function Welcome(props) {
    return(
        <div>
            <h1> My name is {props.name} </h1>
            <p> I am {props.age} years old. </p>
            <p> My eye color is {props.color}.</p>
        </div>
    );
}
export default Welcome;