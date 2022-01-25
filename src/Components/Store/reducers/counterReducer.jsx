import {
    INCREMENT,
    DECREMENT,
    // ATTRIBUTE,
    NEW_ITEM,
    NEW_CART,
} from "../actions";

const initialState = {
    products: [],
    qtd: 0,
    newAttribute: [],
};

const counterReducer = (state = initialState, action) => {
    const { type, payload } = action;

    function incrementFunction(increment) {
        const arrInc = [];
        const { index } = payload;
        let x = 0;
        let { qtd } = state;
        qtd += increment;
        for (let i = 0; i < state.products.length; i++) {
            arrInc.push(state.products[i]);
            if (i === index) {
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

    function newItemFunction() {
        let { qtd } = state;
        qtd++;
        const arrIncrement = [];
        const { item } = payload;
        let productExist = false;

        if (state.products.length > 0) {
            for (let i = 0; i < state.products.length; i++) {
                arrIncrement.push(state.products[i]);
                if (item.name === state.products[i].name) {
                    let counter = item.attributeSelected.length;
                    for (let j = 0; j < item.attributeSelected.length; j++) {
                        if (
                            item.attributeSelected[j] ===
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
                    newAttribute: [...item.attributeSelected],
                };
            }
            const products = {
                products: [
                    ...state.products,
                    {
                        ...item,
                    },
                ],
                qtd,
                newAttribute: [...item.attributeSelected],
            };
            alert("new product added to cart");
            return products;
        } else {
            const products = {
                products: [item],
                qtd,
                newAttribute: [...item.attributeSelected],
            };
            alert("new product added to cart");
            return products;
        }
    }

    switch (type) {
        case INCREMENT:
            return incrementFunction(1);

        case DECREMENT:
            return incrementFunction(-1);

        case NEW_ITEM:
            return newItemFunction();

        case NEW_CART:
            return initialState;

        default:
            return state;

        // **change inCart attributes** //
        // function attributeFunction() {
        //     const arrAtt = [];
        //     const arrAttCart = [];
        //     const { arr, attributeSelected, index, cartIndex } = payload;
        //     const { qtd, products } = state;

        //     for (let i = 0; i < arr.length; i++) {
        //         if (arr.index === i) {
        //             arrAtt.push(`${attributeSelected}-${index}${arr.length}`);
        //         } else {
        //             arrAtt.push(products[cartIndex].attributeSelected[i]);
        //         }
        //     }

        //     for (let i = 0; i < products.length; i++) {
        //         arrAttCart.push(products[i]);
        //         if (i === cartIndex) {
        //             arrAttCart[i].attributeSelected = arrAtt;
        //         }
        //     }

        //     const productsAttribute = {
        //         products: [...arrAttCart],
        //         qtd,
        //     };
        //     return productsAttribute;
        // }

        // case ATTRIBUTE:
        //     return attributeFunction();
    }
};

export default counterReducer;
