import React from 'react';
import './Country.css';

const Country = (props) => {
    return (
        <div className="country">
            <h1>Country Name:<small>{props.name}</small></h1>
            <p>Population:<small>{props.population}</small></p>
            <p>Area:<small>{props.area}</small></p>
        </div>
    );
};

export default Country;