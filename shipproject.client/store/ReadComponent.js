
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShips } from './actions';
import fakeAPI from './api';

const ReadComponent = () => {
    const dispatch = useDispatch();
    const ships = useSelector((state) => state.ships);

    useEffect(() => {
        fakeAPI.getShips().then((data) => dispatch(setShips(data)));
    }, [dispatch]);

    return (
        <div>
            <h2>Read Component</h2>
            <ul>
                {ships.map((ship) => (
                    <li key={ship.id}>{`ID: ${ship.id}, Name: ${ship.name}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReadComponent;
