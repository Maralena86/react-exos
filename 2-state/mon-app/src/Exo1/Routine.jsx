import React from 'react';

function Routine(props) {
    return (
            <button onClick={()=>props.fonction(props.text)}>{props.text}</button>     
    );
}

export default Routine;