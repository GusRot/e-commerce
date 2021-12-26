import React, { Component } from "react";
import Page404 from "../Page404";
import { Routes, Route } from "react-router-dom";

class Router extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Page404 />} />
                <Route path="/men" element={<Page404 />} />
                <Route path="kids" element={<Page404 />} />
            </Routes>
        );
    }
}

export default Router;
