import React, { Component } from "react";
import { ContainerSlider } from "./style";
import VerticalSlider from "./VerticalSlider";
import Button from "../../common/Button";
import { CartInfo } from "../../Cart/CartItem/style";
import ItemName from "../../common/Item/ItemName";
import ItemPrice from "../../common/Item/ItemPrice";
import { graphql } from "react-apollo";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import Attributes from "../../common/Attributes";
import { Link } from "react-router-dom";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            brand: "",
            gallery: [],
            description: "",
            price: "",
            symbol: "",
            currency: "",
            attributes: [],
            swatch: {},
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

        if (this.props.data.product.attributes[0]) {
            for (
                let i = 0;
                i < this.props.data.product.attributes.length;
                i++
            ) {
                attributes.push([
                    ...attributes,
                    ...this.props.data.product.attributes[i].items,
                ]);

                if (this.props.data.product.attributes[i].type === "swatch") {
                    for (
                        let j = 0;
                        j < this.props.data.product.attributes[i].items.length;
                        j++
                    ) {
                        swatchObject.swatch.push(
                            this.props.data.product.attributes[i].items[j].value
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
            currency = this.props.data.product.prices[0].currency.label;
        }
        for (let i = 0; i < this.props.data.product.prices.length; i++) {
            if (this.props.data.product.prices[i].currency.label === currency) {
                price = this.props.data.product.prices[i].amount;
                symbol = this.props.data.product.prices[i].currency.symbol;
            }
        }

        this.setState({
            name: this.props.data.product.name,
            brand: this.props.data.product.brand,
            gallery: [...this.props.data.product.gallery],
            description: this.props.data.product.description,
            price,
            currency: this.props.currency,
            symbol,
            attributes: [...attributes],
            swatch: { ...swatchObject },
        });
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 150);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currency !== this.props.currency) {
            this.rerender();
        }
    }

    render() {
        return (
            <ContainerSlider>
                <section>
                    <VerticalSlider slides={this.state.gallery} />
                </section>
                <CartInfo>
                    <ItemName title={this.state.name} text={this.state.brand} />

                    <Attributes
                        swatch={this.state.swatch}
                        attribute={
                            this.props.data.product
                                ? this.props.data.product.attributes
                                : ""
                        }
                        attributes={this.state ? this.state.attributes : ""}
                    />

                    <ItemPrice
                        symbol={this.state.symbol}
                        price={this.state.price}
                    />

                    <Link to="/cart">
                        <Button
                            submit={() =>
                                this.props.newCartItem(this.props.data.product)
                            }
                        >
                            ADD TO CART
                        </Button>
                    </Link>
                    {this.state.description.replace(/<[^>]*>?/gm, "")}
                </CartInfo>
            </ContainerSlider>
        );
    }
}

export default graphql(LOAD_PRODUCT, {
    options: (props) => {
        return {
            variables: {
                productId: props.api,
            },
        };
    },
})(Product);
