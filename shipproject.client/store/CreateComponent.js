import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addShip } from './actions';
import fakeAPI from './api';

const CreateComponent = () => {
    const dispatch = useDispatch();
    const [newShipName, setNewShipName] = useState('');

    const handleCreate = () => {
        const newShip = { name: newShipName };
        fakeAPI.createShip(newShip).then((data) => {
            dispatch(addShip(data));
            setNewShipName('');
        });
    };

    return (
        <div>
            <h2>Create Component</h2>
            <input
                type="text"
                value={newShipName}
                onChange={(e) => setNewShipName(e.target.value)}
            />
            <button onClick={handleCreate}>Create Ship</button>
        </div>
    );
};

export default CreateComponent;
