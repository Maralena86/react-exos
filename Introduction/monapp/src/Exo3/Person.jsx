import React from 'react';
import Fullname from './Fullname';
import Hobbies from './Hobbies';

function Person(props) {
    return (
        <div>
            <Fullname/>
            <Hobbies />
        </div>
    );
}

export default Person;