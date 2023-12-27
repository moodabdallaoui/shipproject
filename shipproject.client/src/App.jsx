import React from 'react';
import Ship from './Ship';

const App = () => {
    // Sample ship data
    const ships = [
        { Id: '1', Name: 'Ship1', Length: 100, Width: 20, Code: 'ABC123' },
        { Id: '2', Name: 'Ship2', Length: 120, Width: 25, Code: 'DEF456' },
        // Add more ships as needed
    ];

    return (
        <div>
            <h1>Ships Information</h1>
            {ships.map((ship) => (
                <Ship key={ship.Id} ship={ship} />
            ))}
        </div>
    );
};

export default App;