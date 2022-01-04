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
                        <Item
                            title={this.props.products.title}
                            text={this.props.products.text}
                            price={this.props.products.price}
                        />
                        <Attribute
                            selected={this.props.products.attribute}
                            attributes={this.props.products.attributes}
                        />
                    </CartInfo>
                    <ItemQuantities
                        index={this.props.index}
                        qtd={this.props.products.qtd}
                    />
                </section>
                <CarrouselContainer>
                    <Slider slides={this.props.products.img} />
                </CarrouselContainer>
            </CartContainer>
        );
    }
}

export default CartItem;
