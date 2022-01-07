import { GET_ATTRIBUTE } from "../actions";

const initialState = "";

const attributeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ATTRIBUTE:
            return `${action.payload.attributes}-${action.payload.index}`;

        default:
            return state;
    }
};

export default attributeReducer;
