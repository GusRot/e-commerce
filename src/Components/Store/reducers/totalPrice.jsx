import { TOTAL_PRICE } from "../actions";

const initialState = {};

const priceReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOTAL_PRICE:
            return { ...action.payload.price };

        default:
            return state;
    }
};

export default priceReducer;
