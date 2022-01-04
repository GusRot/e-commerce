export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ATTRIBUTE = "ATTRIBUTE";
export const NEW_ITEM = "NEW_ITEM";

export function incrementCounter(index) {
    return {
        type: INCREMENT,
        payload: { index },
    };
}

export function decrementCounter(index) {
    return {
        type: DECREMENT,
        payload: { index },
    };
}

export function handleAttribute(index, attribute) {
    return {
        type: ATTRIBUTE,
        payload: { index, attribute },
    };
}

export function newCartItem(item) {
    return {
        type: NEW_ITEM,
        payload: { item },
    };
}
