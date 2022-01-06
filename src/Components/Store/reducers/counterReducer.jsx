import {
    INCREMENT,
    DECREMENT,
    ATTRIBUTE,
    NEW_ITEM,
    REMOVE_ITEM,
} from "../actions";
import Hjalmar from "../../../assets/Hjalmar.jpg";
import Ciri from "../../../assets/Ciri.jpg";
import Triss from "../../../assets/Triss.jpg";

const initialState = {
    products: [
        {
            title: "Teste",
            text: "Entregar Projeto X",
            price: "12.00",
            attributes: ["A", "B", "C"],
            qtd: 2,
            img: [Hjalmar, Triss, Ciri],
            id: 1,
            attribute: "A",
        },
        {
            title: "AAAAAAA",
            text: "Entregar Projeto X",
            price: "15.00",
            attributes: ["A", "B", "C"],
            qtd: 4,
            img: [Triss, Ciri],
            id: 1,
            attribute: "B",
        },
        {
            title: "BBBBBBB",
            text: "Entregar Projeto X",
            price: "10.00",
            attributes: ["A", "B", "C"],
            qtd: 6,
            img: [Ciri, Hjalmar],
            id: 1,
            attribute: "C",
        },
    ],
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
