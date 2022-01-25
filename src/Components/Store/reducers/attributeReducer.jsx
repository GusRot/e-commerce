import { GET_ATTRIBUTE } from "../actions";

const initialState = {
    name: "",
    attributes: [],
};

const attributeReducer = (state = initialState, action) => {
    const arrAtt = [];
    const { type, payload } = action;
    const { attributes } = state;

    function defineAttributeState() {
        for (let i = 0; i < payload.arr.length; i++) {
            if (attributes.length > payload.arr.length) {
                attributes.splice(0, attributes.length);
            }

            if (attributes.length < payload.arr.length) {
                arrAtt.push("");
                attributes.push("");
            } else {
                arrAtt.push("");
                arrAtt[i] = attributes[i];
            }

            if (payload.arr.index === i) {
                arrAtt[
                    i
                ] = `${payload.attributes}-${payload.index}${payload.arr.length}`;
            }
        }
    }

    switch (type) {
        case GET_ATTRIBUTE:
            if (payload.arr) {
                if (payload.arr.length > 1) {
                    defineAttributeState();
                } else {
                    arrAtt.push(
                        `${payload.attributes}-${payload.index}${payload.arr.length}`
                    );
                }
            }
            return {
                name: payload.name,
                attributes: [...arrAtt],
            };

        default:
            return state;
    }
};

export default attributeReducer;
