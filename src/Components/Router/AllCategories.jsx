import React, { Component } from "react";
import Page from "../Pages";
import { LOAD_PRODUCTS } from "../GraphQL/Queries";
import { graphql } from "react-apollo";

export const Category1 = "all";

class AllCategories extends Component {
    render() {
        const { data } = this.props;
        return (
            <>
                <Page category={Category1} products={data.category?.products} />
            </>
        );
    }
}

export default graphql(LOAD_PRODUCTS, {
    options: {
        variables: {
            input: {
                title: Category1,
            },
        },
    },
})(AllCategories);
