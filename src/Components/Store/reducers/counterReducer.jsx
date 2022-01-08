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
    switch (action.type) {
        case INCREMENT:
            const arrInc = [];
            let qtd1 = state.qtd;
            qtd1++;
            for (let i = 0; i < state.products.length; i++) {
                arrInc.push(state.products[i]);
                if (i === action.payload.index) {
                    arrInc[i].qtd += 1;
                }
            }

            return {
                products: [...arrInc],
                qtd: qtd1,
            };

        case DECREMENT:
            let x = 0;
            const arrDec = [];
            let qtd2 = state.qtd;
            qtd2--;
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
                qtd: qtd2,
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
                ...state.qtd,
            };

        case NEW_ITEM:
            let qtd3 = state.qtd;
            qtd3++;
            if (state.products.length > 0) {
                for (let i = 0; i < state.products.length; i++) {
                    if (action.payload.item.name === state.products[i].name) {
                        alert("Este produto já esta no carrinho");
                        return state;
                    }
                }
                return {
                    products: [...state.products, action.payload.item],
                    qtd: qtd3,
                };
            } else {
                return {
                    products: [action.payload.item],
                    qtd: qtd3,
                };
            }

        case NEW_CART:
            return initialState;

        default:
            return state;
    }
};

export default counterReducer;
