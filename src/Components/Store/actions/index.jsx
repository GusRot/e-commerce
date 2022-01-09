export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ATTRIBUTE = "ATTRIBUTE";
export const NEW_ITEM = "NEW_ITEM";
export const GET_API = "GET_API";
export const GET_CURRENCY = "GET_CURRENCY";
export const GET_ATTRIBUTE = "GET_ATTRIBUTE";
export const NEW_CART = "NEW_CART";
export const TOTAL_PRICE = "TOTAL_PRICE";

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

export function newCartItem(item, attributeSelected) {
    return {
        type: NEW_ITEM,
        payload: { item: { ...item, qtd: 1, attributeSelected } },
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

export function getAttribute(attributes, index, arr, inCart, cartIndex) {
    if (inCart) {
        return {
            type: ATTRIBUTE,
            payload: { index, attributeSelected: attributes, arr, cartIndex },
        };
    } else {
        return {
            type: GET_ATTRIBUTE,
            payload: { attributes, index, arr, name: cartIndex },
        };
    }
}

export function newCart() {
    return {
        type: NEW_CART,
    };
}

export function totalPrice(price) {
    return {
        type: TOTAL_PRICE,
        payload: { price },
    };
}
