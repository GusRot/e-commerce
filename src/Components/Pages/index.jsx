import React, { Component } from "react";
import Card from "./Card";
import { PagesContainer } from "./style";

class Page extends Component {
    render() {
        return (
            <PagesContainer>
                <h1>Category</h1>
                <div>
                    <Card />
                </div>
            </PagesContainer>
        );
    }
}

export default Page;
