import React, { Component } from "react";
import Page404 from "../Page404";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart";
import Page from "../Pages";

class Router extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Page />} />
                <Route path="/men" element={<Cart />} />
                <Route path="/kids" element={<Page404 />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        );
    }
}

export default Router;
