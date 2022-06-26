import { NEW_FILTER } from "../actions";

const initialState = "";

const filterReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case NEW_FILTER:
            console.log(payload);
            return payload;

        default:
            return state;
    }
};

export default filterReducer;
