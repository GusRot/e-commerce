import React, { Component } from "react";
import CartItem from "../CartItem";
import { Line } from "./style";

class CartComponent extends Component {
    render() {
        return (
            <>
                <Line />
                <CartItem />
                <Line />
                <CartItem />
                <Line />
                <CartItem />
                <Line />
                <CartItem />
                <Line />
            </>
        );
    }
}

export default CartComponent;
