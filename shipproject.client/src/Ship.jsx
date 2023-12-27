import React from 'react';

const Ship = ({ ship }) => {
    return (
        <div>
            <h2>{ship.Name}</h2>
            <p>ID: {ship.Id}</p>
            <p>Length: {ship.Length}</p>
            <p>Width: {ship.Width}</p>
            <p>Code: {ship.Code}</p>
        </div>
    );
};

export default Ship;