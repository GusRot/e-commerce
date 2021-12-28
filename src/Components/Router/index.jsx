import React, { Component } from "react";
import Page404 from "../Page404";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Page from "../Pages";
import Products from "../Products";

class Router extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/men" element={<Cart />} />
                <Route path="/kids" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/outros" element={<Page404 />} />
            </Routes>
        );
    }
}

export default Router;
