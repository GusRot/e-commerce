import { GET_ATTRIBUTE } from "../actions";

const initialState = [];

const attributeReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case GET_ATTRIBUTE:
            const arr = [];
            if (action.payload.arr) {
                if (action.payload.arr.length > 1) {
                    for (let i = 0; i < action.payload.arr.length; i++) {
                        if (state.length > action.payload.arr.length) {
                            state.splice(0, state.length);
                        }
                        if (state.length < action.payload.arr.length) {
                            arr.push("");
                            state.push("");
                        } else {
                            arr.push("");
                            arr[i] = state[i];
                        }

                        if (action.payload.arr.index === i) {
                            arr[
                                i
                            ] = `${action.payload.attributes}-${action.payload.index}${action.payload.arr.length}`;
                        }
                    }
                } else {
                    arr.push(
                        `${action.payload.attributes}-${action.payload.index}${action.payload.arr.length}`
                    );
                }
            }
            return arr;

        default:
            return state;
    }
};

export default attributeReducer;
