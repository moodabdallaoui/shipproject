
const initialState = {
    ships: [],
};

const shipReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHIPS':
            return { ...state, ships: action.payload };
        case 'ADD_SHIP':
            return { ...state, ships: [...state.ships, action.payload] };
        case 'UPDATE_SHIP':
            return {
                ...state,
                ships: state.ships.map((ship) =>
                    ship.id === action.payload.id ? action.payload : ship
                ),
            };
        case 'DELETE_SHIP':
            return {
                ...state,
                ships: state.ships.filter((ship) => ship.id !== action.payload),
            };
        default:
            return state;
    }
};

export default shipReducer;
