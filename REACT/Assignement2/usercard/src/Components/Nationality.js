import React from 'react'

const Nationality  = ({ nationality, type }) => (
    <div className="location">
        <p>{type}: {nationality}</p>
    </div>
);

export default Nationality
