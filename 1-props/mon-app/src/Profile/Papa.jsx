import React from 'react';

function Papa(props) {
    return (
        <div>
            <h1>{props.name} {props.lastName}</h1>
            <h1>{props.age}</h1>
            <p>{props.birthDay.day}/{props.birthDay.month}/{props.birthDay.year}</p>
            <p>{props.nacionality}</p>
            <p>{props.hasCar === true ? 'A une voiture' : 'Pas de voiture'}</p>            
        </div>
    );
}

export default Papa;