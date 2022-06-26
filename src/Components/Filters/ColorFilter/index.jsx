import React, { Component } from "react";
import { setFilter } from "../../Store/actions";
import { connect } from "react-redux";
import { ColorsFilter, ColorsContainer } from "./style";

class ColorFilters extends Component {
    render() {
        const { colorAttributes, setFilter } = this.props;

        return (
            <ColorsFilter>
                <h4>{colorAttributes.name}</h4>
                <ul>
                    {[...new Set(colorAttributes.items?.colors)].map(
                        (color) => (
                            <ColorsContainer
                                key={color}
                                color={color}
                                onClick={() =>
                                    setFilter(null, colorAttributes.name, color)
                                }
                            ></ColorsContainer>
                        )
                    )}
                </ul>
            </ColorsFilter>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (e, name, color) => dispatch(setFilter(e, name, color)),
    };
};

export default connect(null, mapDispatchToProps)(ColorFilters);
