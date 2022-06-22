import React, { Component } from "react";
import Card from "./Card";
import Filters from "../Filters";
import { PagesContainer, CardsContainer, ProductsContainer } from "./style";

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {
            productsAttributes: [],
        };
    }

    rerender() {
        const { products } = this.props;

        if(products) {
            for(let i=0; i < products.length; i++) {
                let j = 0;
                if(products[i].attributes) {
                    while(products[i].attributes.length > j) {
                        this.state.productsAttributes.push(products[i].attributes[j]);
                        j++
                    }
                }
            }
        }
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 10);
    }

    render() {
        const { category, products } = this.props;

        return (
            <PagesContainer>
                <h1>{category.toUpperCase()}</h1>
                <ProductsContainer>
                    <Filters productsAttributes = {this.state.productsAttributes}/>
                    <CardsContainer>
                        {products ? (
                            products.map((product) => (
                                <Card
                                key={product.id}
                                id={product.id}
                                inStock={product.inStock}
                                name={product.name}
                                prices={product.prices}
                                image={product.gallery[0]}
                                brand={product.brand}
                                />
                                ))
                        ) : (
                            <></>
                            )}
                    </CardsContainer>
                </ProductsContainer>
            </PagesContainer>
        );
    }
}

export default Page;
