import React from 'react';

function Animal(props) {
   
    return(
    <h1>
        {props.animal ==='Lion' ? 'Le roi de la jungle': props.animal}
    </h1>
    )
    //if(props.name ==='Lion'){
    //     <h1>Roi de la jungle</h1>
    // );
    // }else
    // return( 
    // <h1>
    //     {props.name}
    //     </h1>);
}

export default Animal;