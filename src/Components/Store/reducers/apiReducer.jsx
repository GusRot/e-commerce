import { GET_API } from "../actions";

const initialState = "";

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API:
            return action.payload.id;

        default:
            return state;
    }
};

export default currencyReducer;
