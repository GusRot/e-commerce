import { NEW_FILTER } from "../actions";

const initialState = {
    name: "",
    value: "",
    filterOn: false,
};

const filterReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEW_FILTER:
            if (payload.value === state.value || !payload.filterOn) {
                return initialState;
            }
            return payload;

        default:
            return state;
    }
};

export default filterReducer;
