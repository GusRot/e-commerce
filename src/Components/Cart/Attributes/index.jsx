import React, { Component } from "react";
import { CartAttribute, SelectedAttribute } from "./style";

class Attribute extends Component {
    render() {
        return (
            <CartAttribute>
                {this.props.attributes.map((attribute, index) => {
                    if (attribute !== this.props.selected) {
                        return (
                            <SelectedAttribute
                                key={attribute + index}
                                selected={false}
                            >
                                <p>{attribute}</p>
                            </SelectedAttribute>
                        );
                    } else {
                        return (
                            <SelectedAttribute
                                key={attribute + index}
                                selected={true}
                            >
                                <p>{attribute}</p>
                            </SelectedAttribute>
                        );
                    }
                })}
            </CartAttribute>
        );
    }
}

export default Attribute;
