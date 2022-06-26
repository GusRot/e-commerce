import React, { Component } from "react";
import Card from "./Card";
import Filters from "../Filters";
import { defineFilters } from "../Store/actions";
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
            } = defineFilters(products);

            this.setState({
                selectAttributes,
                checkboxAttributes,
                colorAttributes,
                selectQty,
            });
        }
    }

    componentDidUpdate(pp, ps) {
        if (this.props.products !== pp.products) {
            this.rerender();
        }
    }

    render() {
        const { category, products } = this.props;
        const {
            selectAttributes,
            selectQty,
            checkboxAttributes,
            colorAttributes,
        } = this.state;

        return (
            <PagesContainer>
                <h1>{category.toUpperCase()}</h1>
                <ProductsContainer>
                    <Filters
                        selectAttributes={selectAttributes}
                        selectQty={selectQty}
                        checkboxAttributes={checkboxAttributes}
                        colorAttributes={colorAttributes}
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
