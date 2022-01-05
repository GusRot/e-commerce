import React, { Component } from "react";
import Card from "./Card";
import { PagesContainer, CardsContainer } from "./style";

class Page extends Component {
    render() {
        return (
            <PagesContainer>
                <h1>{this.props.category.toUpperCase()}</h1>
                <CardsContainer>
                    {this.props.products ? (
                        this.props.products.map((product) => (
                            <Card
                                key={product.id}
                                inStock={product.inStock}
                                name={product.name}
                                prices={product.prices}
                                image={product.gallery[0]}
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
