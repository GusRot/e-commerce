export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ATTRIBUTE = "ATTRIBUTE";

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
