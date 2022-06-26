import React, { Component } from "react";
import { setFilter } from "../../Store/actions";
import { connect } from "react-redux";
import { ColorsFilter, ColorsContainer } from "./style";

class ColorFilters extends Component {
    render() {
        const { colorAttributes, setFilter, active, filter } = this.props;

        return (
            <ColorsFilter active={active}>
                <h4>{colorAttributes.name}</h4>
                <ul>
                    {[...new Set(colorAttributes.items?.colors)].map(
                        (color) => (
                            <ColorsContainer
                                key={color}
                                color={color}
                                selected={
                                    filter?.value === color ? true : false
                                }
                                onClick={() =>
                                    setFilter(
                                        null,
                                        colorAttributes.name,
                                        color,
                                        true
                                    )
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
        setFilter: (e, name, color, on) =>
            dispatch(setFilter(e, name, color, on)),
    };
};

export default connect(null, mapDispatchToProps)(ColorFilters);
