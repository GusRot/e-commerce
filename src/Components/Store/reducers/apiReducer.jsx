import { GET_API } from "../actions";

const initialState = "huarache-x-stussy-le";

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_API:
            return action.payload.id;

        default:
            return state;
    }
};

export default apiReducer;
