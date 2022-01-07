export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const ATTRIBUTE = "ATTRIBUTE";
export const NEW_ITEM = "NEW_ITEM";
export const GET_API = "GET_API";
export const GET_CURRENCY = "GET_CURRENCY";
export const GET_ATTRIBUTE = "GET_ATTRIBUTE";

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

export function removeCartItem(item) {
    return {
        type: REMOVE_ITEM,
        payload: { item },
    };
}

export function getID(e, id) {
    return {
        type: GET_API,
        payload: { id },
    };
}

export function getCurrency(currency) {
    return {
        type: GET_CURRENCY,
        payload: { currency },
    };
}

export function getAttribute(attributes, index, arr) {
    return {
        type: GET_ATTRIBUTE,
        payload: { attributes, index, arr },
    };
}
