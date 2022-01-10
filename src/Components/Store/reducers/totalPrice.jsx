import { TOTAL_PRICE } from "../actions";

const initialState = {};

const priceReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case TOTAL_PRICE:
            localStorage.setItem(
                "price",
                JSON.stringify({ ...action.payload.price })
            );
            return { ...action.payload.price };

        default:
            return state;
    }
};

export default priceReducer;
