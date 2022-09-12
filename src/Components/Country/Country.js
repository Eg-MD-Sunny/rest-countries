import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h3>Country Name:<small>{props.name}</small></h3>
        </div>
    );
};

export default Country;