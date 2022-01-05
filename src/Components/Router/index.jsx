import React, { Component } from "react";
import Page404 from "../Page404";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Page from "../Pages";
import Products from "../Products";
import { LOAD_PRODUCTS } from "../GraphQL/Queries";
import { graphql } from "react-apollo";

class Router extends Component {
    render() {
        return (
            <Routes>
                {console.log(this.props.data.category)}
                <Route
                    path="/"
                    element={
                        <Page products={this.props.data.category?.products} />
                    }
                />
                <Route path="/all" element={<Page />} />
                <Route path="/tech" element={<Cart />} />
                <Route path="/clothes" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        );
    }
}

export default graphql(LOAD_PRODUCTS, {
    options: {
        variables: {
            input: {
                title: "all",
            },
        },
    },
})(Router);
