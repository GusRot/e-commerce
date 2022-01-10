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

            const productIncrement = {
                products: [...arrInc],
                qtd: qtd1,
            };
            return productIncrement;

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
                alert("Removed from cart");
            }

            const productDecrement = {
                products: [...arrDec],
                qtd: qtd2,
            };
            return productDecrement;

        case ATTRIBUTE:
            const arrAtt = [];
            const arrAttCart = [];

            for (let i = 0; i < action.payload.arr.length; i++) {
                if (action.payload.arr.index === i) {
                    arrAtt.push(
                        `${action.payload.attributeSelected}-${action.payload.index}${action.payload.arr.length}`
                    );
                } else {
                    arrAtt.push(
                        state.products[action.payload.cartIndex]
                            .attributeSelected[i]
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

                const products = {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.item,
                            ...action.payload.attributeSelected,
                        },
                    ],
                    qtd: qtd3,
                };

                return products;
            } else {
                const products = {
                    products: [action.payload.item],
                    qtd: qtd3,
                };
                return products;
            }

        case NEW_CART:
            return initialState;

        default:
            return state;
    }
};

export default counterReducer;
