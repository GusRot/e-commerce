import React, { Component } from "react";
import CartComponent from "./CartComponent";
import { ContainerCartComponent } from "./style";

class Cart extends Component {
    render() {
        return (
            <ContainerCartComponent>
                <section>
                    <h1>CART</h1>
                    <CartComponent />
                </section>
            </ContainerCartComponent>
        );
    }
}

export default Cart;
