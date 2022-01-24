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
        const { products, currency } = this.props;
        const { newAttributes, swatchObject } = defineAttributes(
            products.attributes
        );

        const newCurrency = defineCurrency(currency, products.prices);

        const { price, symbol } = definePrice(
            products.prices,
            newCurrency,
            false
        );

        this.setState({
            attributes: [...newAttributes],
            swatch: { ...swatchObject },
            price,
            currency: newCurrency,
            symbol,
        });
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 10);
    }

    componentDidUpdate(prevProps, prevState) {
        const { currency, products } = this.props;
        if (prevState.currency !== currency) {
            this.rerender();
        }
        if (prevProps.products.name !== products.name) {
            this.rerender();
        }
    }

    render() {
        const { products, index } = this.props;
        const { price, symbol, swatch, attributes } = this.state;
        const { brand, name, qtd, gallery } = products;
        return (
            <>
                <CartContainer>
                    <section>
                        <CartInfo pointer={true}>
                            <Item
                                title={name}
                                text={brand}
                                price={price}
                                symbol={symbol}
                            />
                            <Attributes
                                swatch={swatch}
                                attribute={products.attributes}
                                attributes={this.state ? attributes : ""}
                                attributeSelected={true}
                                index={index}
                            />
                        </CartInfo>
                        <ItemQuantities index={index} qtd={qtd} />
                    </section>
                    <CarrouselContainer>
                        <Slider slides={gallery} />
                    </CarrouselContainer>
                </CartContainer>
            </>
        );
    }
}

export default CartItem;
