import React, { Component } from "react";
import { ContainerSlider } from "./style";
import VerticalSlider from "./VerticalSlider";

class Products extends Component {
    render() {
        return (
            <ContainerSlider>
                <section>
                    <VerticalSlider />
                </section>
            </ContainerSlider>
        );
    }
}

export default Products;
