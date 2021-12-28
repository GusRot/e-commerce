import React, { Component } from "react";
import Attribute from "../Cart/Attributes";
import { ContainerSlider } from "./style";
import VerticalSlider from "./VerticalSlider";
import Button from "../Button";
import { CartInfo } from "../Cart/CartItem/style";
import ItemName from "../Cart/CartItem/Item/ItemName";
import ItemPrice from "../Cart/CartItem/Item/ItemPrice";

class Products extends Component {
    render() {
        return (
            <ContainerSlider>
                <section>
                    <VerticalSlider />
                </section>
                <CartInfo>
                    <ItemName />
                    <span>Size:</span>
                    <Attribute />
                    <ItemPrice />
                    <Button>ADD TO CART</Button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita, nihil? Accusantium vero eligendi neque
                        pariatur. Enim fugiat aspernatur nulla deserunt nesciunt
                        quo eligendi sunt, consequatur maiores at, accusamus
                        veniam. Nam?
                    </p>
                </CartInfo>
            </ContainerSlider>
        );
    }
}

export default Products;
