
export const setShips = (ships) => ({
    type: 'SET_SHIPS',
    payload: ships,
});

export const addShip = (ship) => ({
    type: 'ADD_SHIP',
    payload: ship,
});

export const updateShip = (ship) => ({
    type: 'UPDATE_SHIP',
    payload: ship,
});

export const deleteShip = (shipId) => ({
    type: 'DELETE_SHIP',
    payload: shipId,
});
