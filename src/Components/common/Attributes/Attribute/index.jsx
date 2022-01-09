import React, { Component } from "react";
import { CartAttribute, SelectedAttribute } from "./style";
import { getAttribute } from "../../../Store/actions";
import { connect } from "react-redux";

class Attribute extends Component {
    render() {
        return (
            <CartAttribute>
                {this.props.attributes.map((attribute, index) => {
                    let x;
                    this.props.attributeSelected
                        ? (x =
                              this.props.state.counters.products[
                                  this.props.index
                              ].attributeSelected)
                        : (x = this.props.state.attribute.attributes);
                    if (this.props.attributes.length === 0) {
                        return <></>;
                    } else if (
                        `${attribute.id}-${index}${this.props.length.length}` !==
                        x[this.props.length.index]
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
                                        this.props.length,
                                        this.props.attributeSelected,
                                        this.props.index
                                    )
                                }
                            >
                                <p> {attribute.displayValue}</p>
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
    return { state: state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAttribute: (attribute, i, length, x, productIndex) =>
            dispatch(getAttribute(attribute, i, length, x, productIndex)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attribute);
