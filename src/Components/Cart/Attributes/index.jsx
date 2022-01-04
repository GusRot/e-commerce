import React, { Component } from "react";
import { CartAttribute, SelectedAttribute } from "./style";
import { handleAttribute } from "../../Store/actions";
import { connect } from "react-redux";

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
                                onClick={() =>
                                    this.props.handleAttribute(
                                        this.props.index,
                                        attribute
                                    )
                                }
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

const mapDispatchToProps = (dispatch) => {
    return {
        handleAttribute: (i, attribute) =>
            dispatch(handleAttribute(i, attribute)),
    };
};

export default connect(null, mapDispatchToProps)(Attribute);
