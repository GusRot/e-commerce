import { GET_CURRENCY } from "../actions";

const initialState = "USD";

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCY:
            return action.payload.currency;

        default:
            return state;
    }
};

export default currencyReducer;
