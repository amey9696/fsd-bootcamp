import React from 'react'

const Email = ({ email, type }) => (
    <div className="location">
        <p>{type}: {email}</p>
    </div>
);

export default Email
