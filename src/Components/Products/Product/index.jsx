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
            inStock: false,
        };
    }

    rerender() {
        const { data, currency, attributes } = this.props;

        if (!data.loading) {
            const { prices, name, brand, gallery, description, inStock } =
                data.product;

            const { newAttributes, swatchObject } = defineAttributes(
                data.product.attributes
            );

            const newCurrency = defineCurrency(currency, prices);
            const { price, symbol } = definePrice(prices, newCurrency, false);

            const disableButton = defineButton(data.product, attributes);

            this.setState({
                name,
                brand,
                gallery: [...gallery],
                description,
                price,
                currency: newCurrency,
                symbol,
                attributes: [...newAttributes],
                swatch: { ...swatchObject },
                disableButton,
                inStock,
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { currency, attributes } = this.props;
        if (prevState.currency !== currency) {
            this.rerender();
        }
        if (prevProps.attributes.attributes !== attributes.attributes) {
            this.rerender();
        }
    }

    render() {
        const { product } = this.props.data;
        const {
            gallery,
            name,
            brand,
            swatch,
            attributes,
            symbol,
            price,
            disableButton,
            description,
            inStock,
        } = this.state;

        return (
            <ContainerSlider>
                <section>
                    <VerticalSlider slides={gallery} />
                </section>

                <ContainerInfo>
                    <CartInfo>
                        <ItemName title={name} text={brand} />

                        <br></br>
                        <Attributes
                            swatch={swatch}
                            attribute={product ? product.attributes : ""}
                            attributes={this.state ? attributes : ""}
                            attributeSelected={false}
                            index={name}
                        />
                        <br></br>

                        <ItemPrice symbol={symbol} price={price} />

                        <Button
                            disabled={inStock ? disableButton : true}
                            submit={() => this.props.newCartItem(product)}
                        >
                            {inStock
                                ? disableButton
                                    ? "choose attributes"
                                    : "ADD TO CART"
                                : "out of stock"}
                        </Button>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: description,
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
