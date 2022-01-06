import React, { Component } from "react";
import Page from "../Pages";

import { LOAD_PRODUCTS } from "../GraphQL/Queries";
import { graphql } from "react-apollo";

export const Category2 = "tech";

class Tech extends Component {
    render() {
        return (
            <>
                <Page
                    category={Category2}
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
                title: Category2,
            },
        },
    },
})(Tech);
