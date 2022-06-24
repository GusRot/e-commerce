import React, { Component } from "react";
import Card from "./Card";
import Filters from "../Filters";
import { PagesContainer, CardsContainer, ProductsContainer } from "./style";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectAttributes: {},
            checkboxAttributes: [],
            colorAttributes: {},
            selectQty: [],
        };
    }

    rerender() {
        const { products } = this.props;

        if (products) {
            const {
                selectAttributes,
                checkboxAttributes,
                colorAttributes,
                selectQty,
            } = checkForFilters();

            this.setState({
                selectAttributes,
                checkboxAttributes,
                colorAttributes,
                selectQty,
            });
        }

        function checkForFilters() {
            const selectAttributes = {};
            const checkboxAttributes = [];
            const colorAttributes = {
                name: "",
                items: {
                    name: [],
                    colors: [],
                },
            };
            const selectQty = [];
            let pageAttr = null;

            for (let i = 0; i < products.length; i++) {
                let j = 0;
                if (products[i].attributes) {
                    while (products[i].attributes.length > j) {
                        const attr = products[i].attributes[j];
                        const binaryAttr = attr.items[0].id.toUpperCase();

                        if (attr.type === "swatch") {
                            colorAttributes.name = attr.id;

                            for (let k = 0; k < attr.items.length; k++) {
                                colorAttributes.items.name.push(
                                    attr.items[k].displayValue
                                );
                                colorAttributes.items.colors.push(
                                    attr.items[k].value
                                );
                            }
                        } else if (
                            binaryAttr === "Yes".toUpperCase() ||
                            binaryAttr === "No".toUpperCase()
                        ) {
                            const alreadyExists = checkboxAttributes?.find(
                                (element) => element.id === binaryAttr
                            );

                            if (!alreadyExists) {
                                checkboxAttributes.push(attr);
                            }
                        } else {
                            if (pageAttr !== attr.id) {
                                pageAttr = attr.id;
                                selectQty.push(attr.id);
                                selectAttributes[pageAttr] = [];
                            }

                            for (let k = 0; k < attr.items.length; k++) {
                                selectAttributes[pageAttr].push(
                                    attr.items[k].id
                                );
                            }
                        }
                        j++;
                    }
                }
            }

            return {
                selectAttributes,
                checkboxAttributes,
                colorAttributes,
                selectQty,
            };
        }
    }

    componentDidUpdate(pp, ps) {
        if (this.props.products !== pp.products) {
            this.rerender();
        }
    }

    render() {
        const { category, products } = this.props;

        return (
            <PagesContainer>
                <h1>{category.toUpperCase()}</h1>
                <ProductsContainer>
                    <Filters
                        selectAttributes={this.state.selectAttributes}
                        selectQty={this.state.selectQty}
                        checkboxAttributes={this.state.checkboxAttributes}
                        colorAttributes={this.state.colorAttributes}
                    />
                    <CardsContainer>
                        {products?.map((product) => (
                            <Card
                                key={product.id}
                                id={product.id}
                                inStock={product.inStock}
                                name={product.name}
                                prices={product.prices}
                                image={product.gallery[0]}
                                brand={product.brand}
                            />
                        ))}
                    </CardsContainer>
                </ProductsContainer>
            </PagesContainer>
        );
    }
}

export default Page;
