import React from 'react';

function MachineSous(props) {
    if(props.s1===props.s2 && props.s2===props.s3){
        return (
                <div>
                    <p>{props.s1}  {props.s2}  {props.s3}</p>
                    <p>Gagnant</p>  
                </div>
            );
    }else{
        return(
            <div>
                <p>{props.s1}  {props.s2}  {props.s3}</p>
                <p>Perdant</p>
            </div>
        )

    }
    
}

export default MachineSous;