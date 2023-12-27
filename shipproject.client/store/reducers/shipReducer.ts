import { ShipActionTypes, ShipState, ADD_SHIP, DELETE_SHIP, FETCH_SHIPS, UPDATE_SHIP } from '../types';

const initialState: ShipState = {
    ships: [],
};

const shipReducer = (state = initialState, action: ShipActionTypes): ShipState => {
    switch (action.type) {
        case FETCH_SHIPS:
            return {
                ...state,
                ships: action.payload,
            };
        case ADD_SHIP:
            return {
                ...state,
                ships: [...state.ships, action.payload],
            };
        case UPDATE_SHIP:
            return {
                ...state,
                ships: state.ships.map(ship => (ship.Id === action.payload.Id ? action.payload : ship)),
            };
        case DELETE_SHIP:
            return {
                ...state,
                ships: state.ships.filter(ship => ship.Id !== action.payload),
            };
        default:
            return state;
    }
};

export default shipReducer;