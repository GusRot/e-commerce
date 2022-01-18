import React, { Component } from "react";
import Slider from "../Slider";
import { CartContainer, CartInfo, CarrouselContainer } from "./style";
import ItemQuantities from "../../common/ItemQuantities";
import Item from "../../common/Item";
import Attributes from "../../common/Attributes";
import {
    defineCurrency,
    defineAttributes,
    definePrice,
} from "../../Store/actions";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attributes: [],
            swatch: {},
            price: "",
            symbol: "",
            currency: "",
        };
    }

    rerender() {
        const { newAttributes, swatchObject } = defineAttributes(
            this.props.products.attributes
        );

        const currency = defineCurrency(
            this.props.currency,
            this.props.products.prices
        );

        const { price, symbol } = definePrice(
            this.props.products.prices,
            currency,
            false
        );

        this.setState({
            attributes: [...newAttributes],
            swatch: { ...swatchObject },
            price,
            currency,
            symbol,
        });
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 10);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currency !== this.props.currency) {
            this.rerender();
        }
        if (prevProps.products.name !== this.props.products.name) {
            this.rerender();
        }
    }

    render() {
        const { products, index } = this.props;
        return (
            <>
                <CartContainer>
                    <section>
                        <CartInfo pointer={true}>
                            <Item
                                title={products.name}
                                text={products.brand}
                                price={this.state.price}
                                symbol={this.state.symbol}
                            />
                            <Attributes
                                display={true}
                                swatch={this.state.swatch}
                                attribute={products.attributes}
                                attributes={
                                    this.state ? this.state.attributes : ""
                                }
                                attributeSelected={true}
                                index={index}
                            />
                        </CartInfo>
                        <ItemQuantities index={index} qtd={products.qtd} />
                    </section>
                    <CarrouselContainer>
                        <Slider slides={products.gallery} />
                    </CarrouselContainer>
                </CartContainer>
            </>
        );
    }
}

export default CartItem;
