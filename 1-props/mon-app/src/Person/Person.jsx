import React from 'react';

function Person(props) {
    return (
        <div className="person">
            <h1>{props.children} Nom: {props.nom}</h1>
            <h1>Prenom: {props.prenom}</h1>
        </div>
    );
}

export default Person;