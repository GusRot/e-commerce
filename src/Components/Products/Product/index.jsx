import React, { Component } from "react";
import { ContainerInfo, ContainerSlider } from "./style";
import VerticalSlider from "./VerticalSlider";
import Button from "../../common/Button";
import { CartInfo } from "../../Cart/CartItem/style";
import ItemName from "../../common/Item/ItemName";
import ItemPrice from "../../common/Item/ItemPrice";
import { graphql } from "react-apollo";
import { LOAD_PRODUCT } from "../../GraphQL/Queries";
import Attributes from "../../common/Attributes";
import {
    defineButton,
    defineCurrency,
    defineAttributes,
    definePrice,
} from "../../Store/actions";

class Product extends Component {
    constructor(props) {
        super(props);
        this.rerender = this.rerender.bind(this);
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
            disableButton: true,
        };
    }

    rerender() {
        const data = this.props.data;
        if (!data.loading) {
            const { newAttributes, swatchObject } = defineAttributes(
                this.props.data.product.attributes
            );

            const currency = defineCurrency(
                this.props.currency,
                this.props.data.product.prices
            );
            const { price, symbol } = definePrice(
                this.props.data.product.prices,
                currency,
                false
            );

            const disableButton = defineButton(
                this.props.data.product,
                this.props.attributes
            );

            this.setState({
                name: this.props.data.product.name,
                brand: this.props.data.product.brand,
                gallery: [...this.props.data.product.gallery],
                description: this.props.data.product.description,
                price,
                currency,
                symbol,
                attributes: [...newAttributes],
                swatch: { ...swatchObject },
                disableButton,
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currency !== this.props.currency) {
            this.rerender();
        }
        if (
            prevProps.attributes.attributes !== this.props.attributes.attributes
        ) {
            this.rerender();
        }
    }

    render() {
        const { product } = this.props.data;
        return (
            <ContainerSlider>
                <section>
                    <VerticalSlider slides={this.state.gallery} />
                </section>

                <ContainerInfo>
                    <CartInfo>
                        <ItemName
                            title={this.state.name}
                            text={this.state.brand}
                        />

                        <br></br>
                        <Attributes
                            swatch={this.state.swatch}
                            attribute={product ? product.attributes : ""}
                            attributes={this.state ? this.state.attributes : ""}
                            attributeSelected={false}
                            index={this.state.name}
                        />
                        <br></br>

                        <ItemPrice
                            symbol={this.state.symbol}
                            price={this.state.price}
                        />

                        <Button
                            disabled={this.state.disableButton}
                            submit={() => this.props.newCartItem(product)}
                        >
                            {this.state.disableButton
                                ? "choose attributes"
                                : "ADD TO CART"}
                        </Button>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: this.state.description,
                            }}
                        />
                    </CartInfo>
                </ContainerInfo>
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
