import React, { Component } from "react";
import Slider from "../Slider";
import {
    CartContainer,
    CartInfo,
    CartQtd,
    CartAttribute,
    CarrouselContainer,
} from "./style";

class CartItem extends Component {
    render() {
        return (
            <CartContainer>
                <section>
                    <CartInfo>
                        <p>tsadsadsadsakdnsajdnsaitle</p>
                        <p>ttext</p>
                        <p>price</p>
                        <CartAttribute>
                            <p>A</p>
                            <p>B</p>
                            <p>C</p>
                            <p>D</p>
                        </CartAttribute>
                    </CartInfo>
                    <CartQtd>
                        <p>A</p>
                        <p>2</p>
                        <p>A</p>
                    </CartQtd>
                </section>
                <CarrouselContainer>
                    <Slider />
                </CarrouselContainer>
            </CartContainer>
        );
    }
}

export default CartItem;
