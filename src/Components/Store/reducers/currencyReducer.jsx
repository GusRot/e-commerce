import { GET_CURRENCY } from "../actions";

const initialState = "";

const currencyReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CURRENCY:
            return payload.currency;

        case "persist/REHYDRATE":
            return "USD";

        default:
            return state;
    }
};

export default currencyReducer;
