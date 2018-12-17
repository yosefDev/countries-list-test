import React from 'react';

import './search.css';

const search = ({handleChange}) => {
    return (
       <input type="search" className="search" onChange={handleChange} placeholder="Search Country By Name" />
    );
};

export default search;