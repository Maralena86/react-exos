import React from 'react';
import Chambre from './Chambre';
import Cuisine from './Cuisine';
import Salon from './Salon';

function Maison(props) {
    return (
        <div>
            <h1>Bienvenue chez moi, ma maison se comporte de: </h1>
            <ul>
                
                <Salon/>
                <Cuisine />
                <Chambre/>
            </ul>
            
        </div>
    );
}

export default Maison;