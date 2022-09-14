import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name,population,area,region} = props.country;
    return (
        <div className="country">   
            <h1>Country Name:<small>{name.common}</small></h1>
            <p>Population:<small>{population}</small></p>
            <p>Area:<small>{area}</small></p>
            <p>Region:<small>{region}</small></p>
        </div>
    );
};

export default Country;