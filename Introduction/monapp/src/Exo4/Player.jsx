

// function Player(props) {
//     const score=300;

//     if (score>500){
//     return (
//             <h1>Vainqueur: {score}</h1>
//     );
//     }else 
//     return(
//         <h1>Perdant: {score} </h1>
//     );
// }
import React from 'react';

function Player(props) {
    const score=300;
    let prenom="Philippe";
    let nom= "Martin";
    let age= 15;
    let permisDeConduire= false;
    return (
        <div>
            <h1>
                {score > 500 ? 'Vainqueur:' + score : 'Perdant:'+ score}
            </h1>
            <h1> 
                {prenom + " " + nom}</h1>
            <h1>
                {age > 18 ? "Majeur" : "Mineur"}
            </h1>
            <h1>
                {permisDeConduire === true ? "Peut conduire" : "Ne peut pas conduire"}
            </h1>
        </div>
        )
}



export default Player;