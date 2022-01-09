import { GET_ATTRIBUTE } from "../actions";

const initialState = {
    name: "",
    attributes: [],
};

const attributeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ATTRIBUTE:
            const arrAtt = [];
            if (action.payload.arr) {
                if (action.payload.arr.length > 1) {
                    for (let i = 0; i < action.payload.arr.length; i++) {
                        if (
                            state.attributes.length > action.payload.arr.length
                        ) {
                            state.attributes.splice(0, state.attributes.length);
                        }
                        if (
                            state.attributes.length < action.payload.arr.length
                        ) {
                            arrAtt.push("");
                            state.attributes.push("");
                        } else {
                            arrAtt.push("");
                            arrAtt[i] = state.attributes[i];
                        }

                        if (action.payload.arr.index === i) {
                            arrAtt[
                                i
                            ] = `${action.payload.attributes}-${action.payload.index}${action.payload.arr.length}`;
                        }
                    }
                } else {
                    arrAtt.push(
                        `${action.payload.attributes}-${action.payload.index}${action.payload.arr.length}`
                    );
                }
            }

            return {
                name: action.payload.name,
                attributes: [...arrAtt],
            };

        default:
            return state;
    }
};

export default attributeReducer;
