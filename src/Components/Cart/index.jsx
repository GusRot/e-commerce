import React, { Component } from "react";
import CartItem from "./CartItem";
import { ContainerCartComponent, Line } from "./style";

class Cart extends Component {
    render() {
        return (
            <ContainerCartComponent>
                <section>
                    <h1>CART</h1>
                    <Line />
                    <CartItem />
                    <Line />
                    <CartItem />
                    <Line />
                    <CartItem />
                    <Line />
                    <CartItem />
                    <Line />
                    <CartItem />
                    <Line />
                </section>
            </ContainerCartComponent>
        );
    }
}

export default Cart;
