const fakeAPI = {
    getShips: () => Promise.resolve([{ id: 1, name: 'Ship 1' }]),
    createShip: (ship) => Promise.resolve({ ...ship, id: Date.now() }),
    updateShip: (ship) => Promise.resolve(ship),
    deleteShip: (shipId) => Promise.resolve(shipId),
};

export default fakeAPI;