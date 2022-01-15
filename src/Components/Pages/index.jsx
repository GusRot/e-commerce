import React, { Component } from "react";
import Card from "./Card";
import { PagesContainer, CardsContainer } from "./style";

class Page extends Component {
    render() {
        const { category, products } = this.props;
        return (
            <PagesContainer>
                <h1>{category.toUpperCase()}</h1>
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
            </PagesContainer>
        );
    }
}

export default Page;
