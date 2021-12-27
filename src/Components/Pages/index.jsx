import React, { Component } from "react";
import Card from "./Card";
import { PagesContainer, CardsContainer } from "./style";

class Page extends Component {
    render() {
        return (
            <PagesContainer>
                <h1>Category</h1>
                <CardsContainer>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </CardsContainer>
            </PagesContainer>
        );
    }
}

export default Page;
