import { TOTAL_PRICE } from "../actions";

const initialState = {};

const priceReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case TOTAL_PRICE:
            return { ...payload.price };

        default:
            return state;
    }
};

export default priceReducer;
