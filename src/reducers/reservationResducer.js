const initialState = {}

const actions = {getAllReservation: "GET_ALL_RESERVATION", postReservation: "POST_RESERVATION"}

function reservationReducer(state, action) {
    switch (action.type) {
        case actions.getAllReservation:
            return action.payload;
        case actions.postReservation:
            return action.payload;
        default:
            return state;
    }
}

export {reservationReducer, initialState, actions}