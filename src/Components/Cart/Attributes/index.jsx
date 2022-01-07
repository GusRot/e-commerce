import React, { Component } from "react";
import { CartAttribute, SelectedAttribute } from "./style";
import { getAttribute } from "../../Store/actions";
import { connect } from "react-redux";

class Attribute extends Component {
    render() {
        return (
            <CartAttribute>
                {this.props.attributes.map((attribute, index) => {
                    if (this.props.attributes.length === 0) {
                        return <></>;
                    } else if (
                        `${attribute.id}-${index}${this.props.length.length}` !==
                        this.props.state[this.props.length.index]
                    ) {
                        return attribute.displayValue ? (
                            <SelectedAttribute
                                swatch={
                                    this.props.attribute
                                        ? this.props.attribute[index]
                                        : ""
                                }
                                key={attribute.id + index}
                                selected={false}
                                color={attribute.displayValue}
                                onClick={() =>
                                    this.props.getAttribute(
                                        attribute.id,
                                        index,
                                        this.props.length
                                    )
                                }
                            >
                                <p>{attribute.displayValue}</p>
                            </SelectedAttribute>
                        ) : (
                            ""
                        );
                    } else {
                        return (
                            <SelectedAttribute
                                key={attribute.id + index}
                                selected={true}
                                swatch={
                                    this.props.attribute
                                        ? this.props.attribute[index]
                                        : ""
                                }
                            >
                                <p>{attribute.displayValue}</p>
                            </SelectedAttribute>
                        );
                    }
                })}
            </CartAttribute>
        );
    }
}

const mapStateToProps = (state) => {
    return { state: state.attribute };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAttribute: (attribute, i, length) =>
            dispatch(getAttribute(attribute, i, length)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attribute);
