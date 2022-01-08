import {
    INCREMENT,
    DECREMENT,
    ATTRIBUTE,
    NEW_ITEM,
    NEW_CART,
} from "../actions";

const initialState = {
    products: [],
};

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            const arrInc = [];
            for (let i = 0; i < state.products.length; i++) {
                arrInc.push(state.products[i]);
                if (i === action.payload.index) {
                    arrInc[i].qtd += 1;
                }
            }
            return {
                products: [...arrInc],
            };

        case DECREMENT:
            let x = 0;
            const arrDec = [];
            for (let i = 0; i < state.products.length; i++) {
                arrDec.push(state.products[i]);
                if (i === action.payload.index && arrDec[i].qtd > 0) {
                    arrDec[i].qtd -= 1;
                }
                if (arrDec[i].qtd === 0) {
                    x = i;
                }
            }

            if (arrDec[x].qtd === 0) {
                arrDec.splice(x, 1);
            }
            return {
                products: [...arrDec],
            };

        case ATTRIBUTE:
            const arrAtt = [];
            for (let i = 0; i < state.products.length; i++) {
                arrAtt.push(state.products[i]);
                if (i === action.payload.index) {
                    arrAtt[i].attribute = action.payload.attribute;
                }
            }
            return {
                products: [...arrAtt],
            };

        case NEW_ITEM:
            if (state.products.length > 0) {
                for (let i = 0; i < state.products.length; i++) {
                    if (action.payload.item.name === state.products[i].name) {
                        alert("Este produto já esta no carrinho");
                        return state;
                    }
                }
                return {
                    products: [...state.products, action.payload.item],
                };
            } else {
                return {
                    products: [action.payload.item],
                };
            }

        case NEW_CART:
            return initialState;

        default:
            return state;
    }
};

export default counterReducer;
