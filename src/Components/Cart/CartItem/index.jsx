import React, { Component } from "react";
import Slider from "../Slider";
import { CartContainer, CartInfo, CarrouselContainer } from "./style";
import ItemQuantities from "../../common/ItemQuantities";
import Item from "../../common/Item";
import Attributes from "../../common/Attributes";

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
        let currency = "";
        let price = "";
        let symbol = "";
        const attributes = [];
        const swatchObject = {
            index: "",
            swatch: [],
        };

        if (this.props.products.attributes[0]) {
            for (let i = 0; i < this.props.products.attributes.length; i++) {
                attributes.push([
                    ...attributes,
                    ...this.props.products.attributes[i].items,
                ]);

                if (this.props.products.attributes[i].type === "swatch") {
                    for (
                        let j = 0;
                        j < this.props.products.attributes[i].items.length;
                        j++
                    ) {
                        swatchObject.swatch.push(
                            this.props.products.attributes[i].items[j].value
                        );
                    }
                    swatchObject.index = i;
                }
                for (let j = 0; j < swatchObject.index; j++) {
                    swatchObject.swatch.unshift("");
                }
            }
        }

        if (this.props.currency) {
            currency = this.props.currency;
        } else {
            currency = this.props.products.prices[0].currency.label;
        }
        for (let i = 0; i < this.props.products.prices.length; i++) {
            if (this.props.products.prices[i].currency.label === currency) {
                price = this.props.products.prices[i].amount;
                symbol = this.props.products.prices[i].currency.symbol;
            }
        }

        this.setState({
            attributes: [...attributes],
            swatch: { ...swatchObject },
            price,
            currency: this.props.currency,
            symbol,
        });
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 50);
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
        return (
            <>
                <CartContainer>
                    <section>
                        <CartInfo>
                            <Item
                                title={this.props.products.name}
                                text={this.props.products.brand}
                                price={this.state.price}
                                symbol={this.state.symbol}
                            />
                            <Attributes
                                display={true}
                                swatch={this.state.swatch}
                                attribute={this.props.products.attributes}
                                attributes={
                                    this.state ? this.state.attributes : ""
                                }
                            />
                        </CartInfo>
                        <ItemQuantities
                            index={this.props.index}
                            qtd={this.props.products.qtd}
                        />
                    </section>
                    <CarrouselContainer>
                        <Slider slides={this.props.products.gallery} />
                    </CarrouselContainer>
                </CartContainer>
            </>
        );
    }
}

export default CartItem;
