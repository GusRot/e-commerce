import {
    INCREMENT,
    DECREMENT,
    ATTRIBUTE,
    NEW_ITEM,
    REMOVE_ITEM,
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
            const arrDec = [];
            for (let i = 0; i < state.products.length; i++) {
                arrDec.push(state.products[i]);
                if (i === action.payload.index && arrDec[i].qtd > 0) {
                    arrDec[i].qtd -= 1;
                }
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
            for (let i = 0; i < state.products.length; i++) {
                if (action.payload.item.title === state.products[i].title)
                    alert("Este produto já esta no carrinho");
                return state;
            }

            return {
                products: [...state.products, action.payload.item],
            };

        case REMOVE_ITEM:
            break;

        default:
            return state;
    }
};

export default counterReducer;
