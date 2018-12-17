import React from 'react';

import './country.css'
const country = ({ country, handleClick }) => {
    return (
        <li className="country" onClick={() => handleClick(country)}>
            <div className="flag" style={{ backgroundImage: `url(${country.flag})` }}>
            </div>
            <div className="info">
                <div className="name">{country.name}{country.name !== country.nativeName && ` - ${country.nativeName}`}</div>
                <div className="region">{country.region}</div>
            </div>
        </li>
    )
}

export default country
