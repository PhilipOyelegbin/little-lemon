const initialState = {reservation: {}, availableTimes: []}

const actions = {getAllReservation: "GET_ALL_RESERVATION", updateTime: "UPDATE_TIME", postReservation: "POST_RESERVATION"}

function reservationReducer(state, action) {
    switch (action.type) {
        case actions.getAllReservation:
            return {reservation: action.payload};
        case actions.updateTime:
            return {availableTimes: action.payload};
        case actions.postReservation:
            return {reservation: action.payload};
        default:
            return state;
    }
}

export {reservationReducer, initialState, actions}