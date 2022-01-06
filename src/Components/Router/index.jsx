import React, { Component } from "react";
import Page404 from "../Page404";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Products from "../Products";
import AllCategories from "./AllCategories";
import Tech from "./Tech";
import Clothes from "./Clothes";
import { Category3 } from "./Clothes";
import { Category1 } from "./AllCategories";
import { Category2 } from "./Tech";

class Router extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<AllCategories />} />
                <Route path={`/${Category1}`} element={<AllCategories />} />
                <Route path={`/${Category2}`} element={<Tech />} />
                <Route path={`/${Category3}`} element={<Clothes />} />
                <Route path="/products/:id" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        );
    }
}

export default Router;
