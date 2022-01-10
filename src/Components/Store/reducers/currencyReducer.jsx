import { GET_CURRENCY } from "../actions";

const initialState = "";

const currencyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCY:
            return action.payload.currency;

        case "persist/REHYDRATE":
            return "USD";

        default:
            return state;
    }
};

export default currencyReducer;
