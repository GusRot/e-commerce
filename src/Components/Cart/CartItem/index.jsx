import React, { Component } from "react";
import Slider from "../Slider";
import { CartContainer, CartInfo, CarrouselContainer } from "./style";
import Attribute from "../Attributes";
import ItemQuantities from "./ItemQuantities";
import Item from "./Item";

class CartItem extends Component {
    render() {
        return (
            <CartContainer>
                <section>
                    <CartInfo>
                        <Item />
                        <Attribute />
                    </CartInfo>
                    <ItemQuantities />
                </section>
                <CarrouselContainer>
                    <Slider />
                </CarrouselContainer>
            </CartContainer>
        );
    }
}

export default CartItem;
