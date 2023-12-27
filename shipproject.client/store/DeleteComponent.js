
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteShip } from './actions';
import fakeAPI from './api';

const DeleteComponent = () => {
    const dispatch = useDispatch();

    const handleDelete = (shipId) => {
        fakeAPI.deleteShip(shipId).then(() => dispatch(deleteShip(shipId)));
    };

    return (
        <div>
            <h2>Delete Component</h2>
            <button onClick={() => handleDelete(1)}>Delete Ship</button>
        </div>
    );
};

export default DeleteComponent;
