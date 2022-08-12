import React, {useEffect} from 'react';

function Counter({fonction}) {
    const styleBouton = {
        border: "1px solid blue",
        backgroundColor: "darkblue",
        color: "white",
        fontSize: "1.3rem",
        borderRadius: "15px",
        outline: "none",
        padding: "10px",
        cursor: "pointer"
    }

    useEffect(()=>{
        console.log('useEffect counter.js');
      });
    console.log('Counter.js return');

    return (
        <button style={styleBouton} onClick={fonction}>
            INCREMENTER
        </button>
    );
}

export default Counter;