export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
// export const ATTRIBUTE = "ATTRIBUTE";
export const NEW_ITEM = "NEW_ITEM";
export const GET_API = "GET_API";
export const GET_CURRENCY = "GET_CURRENCY";
export const GET_ATTRIBUTE = "GET_ATTRIBUTE";
export const NEW_CART = "NEW_CART";
export const NEW_FILTER = "NEW_FILTER";
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
        payload: {
            item: {
                ...item,
                qtd: 1,
                attributeSelected: [...attributeSelected],
            },
        },
    };
}

export function getID(e, id) {
    return {
        type: GET_API,
        payload: { id },
    };
}

export function setFilter(e, name, attr, on) {
    let value = "";
    let filterOn = on;

    if (attr) {
        value = attr;
    } else if (!e.target.value) {
        filterOn = false;
    } else {
        value = e.target.value;
    }

    return {
        type: NEW_FILTER,
        payload: { name, value, filterOn },
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
        // **change inCart attributes** //
        // return {
        //     type: ATTRIBUTE,
        //     payload: { index, attributeSelected: attributes, arr, cartIndex },
        // };
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

export function definePrice(prices, currency, quantity) {
    let price = "";
    let symbol = "";
    let x = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i].currency.label === currency) {
            price = prices[i].amount;
            symbol = prices[i].currency.symbol;
            x = i;
        }
        if (quantity && prices.length - 1 === i) {
            return { price, symbol, x, quantity };
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

export function defineFilters(products) {
    const selectAttributes = {};
    const checkboxAttributes = [];
    const colorAttributes = {
        name: "",
        items: {
            name: [],
            colors: [],
        },
    };
    const selectQty = [];
    let pageAttr = null;

    for (let i = 0; i < products.length; i++) {
        let j = 0;
        if (products[i].attributes) {
            while (products[i].attributes.length > j) {
                const attr = products[i].attributes[j];
                const binaryAttr = attr.items[0].id.toUpperCase();

                if (attr.type === "swatch") {
                    colorAttributes.name = attr.id;

                    for (let k = 0; k < attr.items.length; k++) {
                        colorAttributes.items.name.push(
                            attr.items[k].displayValue
                        );
                        colorAttributes.items.colors.push(attr.items[k].value);
                    }
                } else if (
                    binaryAttr === "Yes".toUpperCase() ||
                    binaryAttr === "No".toUpperCase()
                ) {
                    const alreadyExists = checkboxAttributes?.find(
                        (element) => element.id === binaryAttr
                    );

                    if (!alreadyExists) {
                        checkboxAttributes.push(attr);
                    }
                } else {
                    if (pageAttr !== attr.id) {
                        pageAttr = attr.id;
                        selectQty.push(attr.id);
                        selectAttributes[pageAttr] = [];
                    }

                    for (let k = 0; k < attr.items.length; k++) {
                        selectAttributes[pageAttr].push(attr.items[k].id);
                    }
                }
                j++;
            }
        }
    }

    return {
        selectAttributes,
        checkboxAttributes,
        colorAttributes,
        selectQty,
    };
}
