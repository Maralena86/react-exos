import React, { useState }  from 'react';

function Counteur(props) {
    const [compteur,setCompteur] = useState(0);
// let compteur=0;
    const onClicki=()=>{
     setCompteur(compteur+1);
        console.log('compteur: ',compteur);
        
    }
    const onClicki2=()=>{
        setCompteur(compteur-1);
           console.log('compteur: ',compteur);   
       }
       console.log('page: '+compteur);
    return (
        <>
            <button onClick={onClicki}>Incrementer</button>
            <button onClick={onClicki2}>Decrementer</button>
            <div className="compteur">
                Compteur: {compteur}
            </div>
            
        </>
    );
}
export default Counteur;


