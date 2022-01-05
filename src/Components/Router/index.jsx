import React, { Component } from "react";
import Page404 from "../Page404";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Products from "../Products";
import AllCategories from "./AllCategories";
import Tech from "./Tech";
import Clothes from "./Clothes";

class Router extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<AllCategories />} />
                <Route path="/all" element={<AllCategories />} />
                <Route path="/tech" element={<Tech />} />
                <Route path="/clothes" element={<Clothes />} />
                <Route path="/products/" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        );
    }
}

export default Router;
