import { createStore } from "redux";

const initialState = {
    products: [
        {
            title: "",
            text: "Entregar Projeto X",
            price: 1,
            attribute: ["", ""],
            qtd: 2,
            img: ["", ""],
            id: 1,
        },
        {
            title: "",
            text: "Entregar Projeto X",
            price: 1,
            attribute: ["", ""],
            qtd: 2,
            img: ["", ""],
            id: 1,
        },
        {
            title: "",
            text: "Entregar Projeto X",
            price: 1,
            attribute: ["", ""],
            qtd: 2,
            img: ["", ""],
            id: 1,
        },
    ],
};

function reducer(state = initialState, action) {
    return state;
}

const store = createStore(reducer);

export default store;
