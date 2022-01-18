import {
    INCREMENT,
    DECREMENT,
    ATTRIBUTE,
    NEW_ITEM,
    NEW_CART,
} from "../actions";

const initialState = {
    products: [],
    qtd: 0,
};

const counterReducer = (state = initialState, action) => {
    function incrementFunction(increment) {
        const arrInc = [];
        let x = 0;
        let qtd = state.qtd;
        qtd += increment;
        for (let i = 0; i < state.products.length; i++) {
            arrInc.push(state.products[i]);
            if (i === action.payload.index) {
                arrInc[i].qtd += increment;
            }
            if (increment < 0) {
                if (arrInc[i].qtd === 0) {
                    x = i;
                }
            }
        }

        if (arrInc[x].qtd === 0) {
            arrInc.splice(x, 1);
            alert("Removed from cart");
        }

        const productIncrement = {
            products: [...arrInc],
            qtd,
        };
        return productIncrement;
    }

    function attributeFunction() {
        const arrAtt = [];
        const arrAttCart = [];

        for (let i = 0; i < action.payload.arr.length; i++) {
            if (action.payload.arr.index === i) {
                arrAtt.push(
                    `${action.payload.attributeSelected}-${action.payload.index}${action.payload.arr.length}`
                );
            } else {
                arrAtt.push(
                    state.products[action.payload.cartIndex].attributeSelected[
                        i
                    ]
                );
            }
        }

        for (let i = 0; i < state.products.length; i++) {
            arrAttCart.push(state.products[i]);
            if (i === action.payload.cartIndex) {
                arrAttCart[i].attributeSelected = arrAtt;
            }
        }

        const productsAttribute = {
            products: [...arrAttCart],
            qtd: state.qtd,
        };
        return productsAttribute;
    }

    function newItemFunction() {
        let qtd = state.qtd;
        qtd++;
        const arrIncrement = [];
        let productExist = false;
        if (state.products.length > 0) {
            for (let i = 0; i < state.products.length; i++) {
                arrIncrement.push(state.products[i]);
                if (action.payload.item.name === state.products[i].name) {
                    let counter = action.payload.item.attributeSelected.length;
                    for (
                        let j = 0;
                        j < action.payload.item.attributeSelected.length;
                        j++
                    ) {
                        if (
                            action.payload.item.attributeSelected[j] ===
                            state.products[i].attributeSelected[j]
                        ) {
                            counter--;
                        }
                    }
                    if (counter === 0) {
                        alert("added to cart");
                        arrIncrement[i].qtd += 1;
                        productExist = true;
                    }
                }
            }

            if (productExist) {
                return {
                    products: [...arrIncrement],
                    qtd,
                };
            }

            const products = {
                products: [
                    ...state.products,
                    {
                        ...action.payload.item,
                        ...action.payload.attributeSelected,
                    },
                ],
                qtd,
            };
            alert("new product added to cart");
            return products;
        } else {
            const products = {
                products: [action.payload.item],
                qtd,
            };
            alert("new product added to cart");
            return products;
        }
    }

    switch (action.type) {
        case INCREMENT:
            return incrementFunction(1);

        case DECREMENT:
            return incrementFunction(-1);

        case ATTRIBUTE:
            return attributeFunction();

        case NEW_ITEM:
            return newItemFunction();

        case NEW_CART:
            return initialState;

        default:
            return state;
    }
};

export default counterReducer;
