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
            const equals =
                payload.value === state.value && state.name === payload.name;
            if (equals || !payload.filterOn) {
                return initialState;
            }
            return payload;

        default:
            return state;
    }
};

export default filterReducer;
