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

export function defineAttributes(attributes) {
    const newAttributes = [];
    const swatchObject = {
        index: "",
        swatch: [],
    };
    if (attributes[0]) {
        for (let i = 0; i < attributes.length; i++) {
            newAttributes.push([...newAttributes, ...attributes[i].items]);

            if (attributes[i].type === "swatch") {
                for (let j = 0; j < attributes[i].items.length; j++) {
                    swatchObject.swatch.push(attributes[i].items[j].value);
                }
                swatchObject.index = i;
            }
            for (let j = 0; j < swatchObject.index; j++) {
                swatchObject.swatch.unshift("");
            }
        }
    }
    return { newAttributes, swatchObject };
}

export function defineCurrency(currency, prices) {
    if (currency) {
        const newCurrency = currency;
        return newCurrency;
    } else {
        const newCurrency = prices[0].currency.label;
        return newCurrency;
    }
}

export function definePrice(prices, currency) {
    let price = "";
    let symbol = "";
    for (let i = 0; i < prices.length; i++) {
        if (prices[i].currency.label === currency) {
            price = prices[i].amount;
            symbol = prices[i].currency.symbol;
        }
    }
    return { price, symbol };
}

export function defineButton(product, attributes) {
    let disableButton = product.attributes.length ? true : false;

    const length = attributes.attributes.length;

    if (length > 0 && product.name === attributes.name) {
        let arrLength = 0;
        for (let i = 0; i < length; i++) {
            if (attributes.attributes[i] !== "") {
                arrLength++;
            }
        }
        if (arrLength === length) {
            disableButton = false;
        }
    }
    return disableButton;
}
