import React, { Component } from "react";
import Slider from "../Slider";
import { CartContainer, CartInfo, CarrouselContainer } from "./style";
import Attribute from "../Attributes";
import ItemQuantities from "./ItemQuantities";

class CartItem extends Component {
    render() {
        return (
            <CartContainer>
                <section>
                    <CartInfo>
                        <div>
                            <h2>tsadsadsadsakdnsajdnsaitle</h2>
                            <h4>ttext</h4>
                            <h6>$ 50.00</h6>
                        </div>
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
