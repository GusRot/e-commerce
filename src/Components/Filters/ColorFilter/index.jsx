import React, { Component } from "react";
import { ColorsFilter, ColorsContainer } from "./style";

class ColorFilters extends Component {
    render() {
        const { colorAttributes } = this.props;

        return (
            <ColorsFilter>
                <h4>{colorAttributes.name}</h4>
                <ul>
                    {[...new Set(colorAttributes.items?.colors)].map(
                        (color) => (
                            <ColorsContainer
                                key={color}
                                color={color}
                                onClick={() => console.log("ok")}
                            ></ColorsContainer>
                        )
                    )}
                </ul>
            </ColorsFilter>
        );
    }
}

export default ColorFilters;
