import React, { Component } from "react";
import CartComponent from "../../Cart/CartComponent";

import { ModalCartContainer, MyBag } from "./style";

class ModalCart extends Component {
    render() {
        return (
            <ModalCartContainer>
                <MyBag>
                    <h2>My Bag,</h2>
                    <span>2</span>
                </MyBag>
                <CartComponent />
            </ModalCartContainer>
        );
    }
}

export default ModalCart;
