const initialState = {}

const actions = {getAllMenu: "GET_ALL_MENU", getFilteredMenu: "FILTERED_MENU"}

function menuReducer(state, action) {
    switch (action.type) {
        case actions.getAllMenu:
            return action.payload;
        case actions.getFilteredMenu:
            return action.payload;
        default:
            return state;
    }
}

export {menuReducer, initialState, actions}