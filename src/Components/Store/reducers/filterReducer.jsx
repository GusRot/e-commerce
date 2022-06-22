import { GET_API } from "../actions";

const initialState = "";

const currencyReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_API:
            return payload.id;

        default:
            return state;
    }
};

export default currencyReducer;
