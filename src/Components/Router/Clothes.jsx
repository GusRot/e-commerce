import React, { Component } from "react";
import Page from "../Pages";

import { LOAD_PRODUCTS } from "../GraphQL/Queries";
import { graphql } from "react-apollo";

const category = "clothes";

class Clothes extends Component {
    render() {
        return (
            <>
                <Page
                    category={category}
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
                title: category,
            },
        },
    },
})(Clothes);
