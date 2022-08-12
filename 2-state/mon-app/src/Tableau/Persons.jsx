import React from 'react';

function Persons(props) {
    const persons=[
        {id:34, nom: "Badi", prenom: 'Alex'},
        {id:86, nom: "Harris", prenom: 'Tyler'},
        {id:34, nom: "Badi", prenom: 'Alex'},
        {id:34, nom: "Badi", prenom: 'Alex'},
        {id:34, nom: "Badi", prenom: 'Alex'}
    ]
    return persons.map(element =>{
        return (
        <li key={element.id}>{element.prenom} {element.nom}</li>
        )
    }) 
           
}

export default Persons;