import React, { Component } from "react";
import Page from "../Pages";

import { LOAD_PRODUCTS } from "../GraphQL/Queries";
import { graphql } from "react-apollo";

export const Category3 = "clothes";

class Clothes extends Component {
    render() {
        return (
            <>
                <Page
                    category={Category3}
                    products={this.props.data.category?.products}
                />
            </>
        );
    }
}

export default graphql(LOAD_PRODUCTS, {
    options: {
        variables: {
            input: {
                title: Category3,
            },
        },
    },
})(Clothes);
