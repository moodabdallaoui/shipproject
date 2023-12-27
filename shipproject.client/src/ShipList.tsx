import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Ship, fetchShips, addShip, updateShip, deleteShip } from './store';

interface Ship {
    Id: string;
    Name: string;
    Length: number;
    Width: number;
    Code: string;
}

const ShipList: React.FC = () => {
    const [ships, setShips] = useState<Ship[]>([]);
    const [newShip, setNewShip] = useState<Partial<Ship>>({});

    useEffect(() => {
        // Fetch ships from the backend API on component mount
        fetchShips();
    }, []);

    const fetchShips = () => {
        axios.get<Ship[]>('http://localhost:5160/ships')
            .then(response => setShips(response.data))
            .catch(error => console.error('Error fetching ships:', error));
    };

    const addShip = () => {
        axios.post('http://localhost:5160/ships', newShip)
            .then(() => {
                // Refresh the ship list after adding a new ship
                fetchShips();
                setNewShip({});
            })
            .catch(error => console.error('Error adding ship:', error));
    };

    const deleteShip = (shipId: string) => {
        axios.delete(`http://localhost:5160/ships/${shipId}`)
            .then(() => {
                // Refresh the ship list after deleting a ship
                fetchShips();
            })
            .catch(error => console.error('Error deleting ship:', error));
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>, key: keyof Ship) => {
        setNewShip({ ...newShip, [key]: e.target.value });
    };

    return (
        <div>
            <h1>Ships Information</h1>

            <div>
                <h2>Add New Ship</h2>
                <label>ID:</label>
                <input type="text" value={newShip.Id || ''} onChange={(e) => handleInputChange(e, 'Id')} />
                <label>Name:</label>
                <input type="text" value={newShip.Name || ''} onChange={(e) => handleInputChange(e, 'Name')} />
                <label>Length:</label>
                <input type="number" value={newShip.Length || ''} onChange={(e) => handleInputChange(e, 'Length')} />
                <label>Width:</label>
                <input type="number" value={newShip.Width || ''} onChange={(e) => handleInputChange(e, 'Width')} />
                <label>Code:</label>
                <input type="text" value={newShip.Code || ''} onChange={(e) => handleInputChange(e, 'Code')} />
                <button onClick={addShip}>Add Ship</button>
            </div>

            <ul>
                {ships.map((ship) => (
                    <li key={ship.Id}>
                        {`ID: ${ship.Id}, Name: ${ship.Name}, Length: ${ship.Length}, Width: ${ship.Width}, Code: ${ship.Code}`}
                        <button onClick={() => deleteShip(ship.Id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default ShipList;