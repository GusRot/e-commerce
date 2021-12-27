import React, { Component } from "react";
import { CartAttribute } from "./style";

class Attribute extends Component {
    render() {
        return (
            <CartAttribute selected={true}>
                <div>
                    <p>A</p>
                </div>
                <div>
                    <p>A</p>
                </div>
                <div>
                    <p>A</p>
                </div>
            </CartAttribute>
        );
    }
}

export default Attribute;
