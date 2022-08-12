import React from 'react';
import FirstName from './FirstName';
import LastName from './LastName';

function Fullname(props) {
    return (
        <div>
            <FirstName/>
            <LastName/>           
        </div>
    );
}

export default Fullname;