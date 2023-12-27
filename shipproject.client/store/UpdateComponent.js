import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateShip } from './actions';
import fakeAPI from './api';

const UpdateComponent = () => {
    const dispatch = useDispatch();
    const [updatedShipName, setUpdatedShipName] = useState('');

    const handleUpdate = (shipId) => {
        const updatedShip = { id: shipId, name: updatedShipName };
        fakeAPI.updateShip(updatedShip).then((data) => {
            dispatch(updateShip(data));
            setUpdatedShipName('');
        });
    };

    return (
        <div>
            <h2>Update Component</h2>
            <input
                type="text"
                value={updatedShipName}
                onChange={(e) => setUpdatedShipName(e.target.value)}
            />
            <button onClick={() => handleUpdate(1)}>Update Ship</button>
        </div>
    );
};

export default UpdateComponent;
