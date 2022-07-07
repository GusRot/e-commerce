import { NEW_FILTER } from "../actions";

const initialState = {
    filterOn: false,
    filters: {},
};

const filterReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case NEW_FILTER:
            let equals = false;
            let payloadKey = "";
            const payloadFilter = { ...payload.filters };
            const stateFilter = { ...state.filters };

            Object.keys(payloadFilter).forEach(function (key) {
                if (
                    payloadFilter[key] === state.filters[key] ||
                    payloadFilter[key] === ""
                ) {
                    equals = true;
                    payloadKey = key;
                }
            });

            if (equals) {
                delete stateFilter[payloadKey];

                if (Object.keys(stateFilter).length === 0) {
                    return initialState;
                }

                return {
                    filterOn: true,
                    filters: {
                        ...stateFilter,
                    },
                };
            }

            return {
                filterOn: true,
                filters: {
                    ...state.filters,
                    ...payloadFilter,
                },
            };

        default:
            return state;
    }
};

export default filterReducer;
