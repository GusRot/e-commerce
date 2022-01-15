import React, { Component } from "react";
import { CartAttribute, SelectedAttribute } from "./style";
import { getAttribute } from "../../../Store/actions";
import { connect } from "react-redux";

class Attribute extends Component {
    render() {
        const {
            attributes,
            state,
            length,
            attributeSelected,
            attribute,
            index,
        } = this.props;
        return (
            <CartAttribute>
                {attributes.map((attributeMap, i) => {
                    let x;
                    attributeSelected
                        ? (x = state.counters.products[index].attributeSelected)
                        : (x = state.attribute.attributes);
                    if (attributes.length === 0) {
                        return <></>;
                    } else if (
                        `${attributeMap.id}-${i}${length.length}` !==
                        x[length.index]
                    ) {
                        return attributeMap.displayValue ? (
                            <SelectedAttribute
                                swatch={attribute ? attribute[i] : ""}
                                key={attributeMap.id + i}
                                selected={false}
                                color={attributeMap.displayValue}
                                onClick={() =>
                                    this.props.getAttribute(
                                        attributeMap.id,
                                        i,
                                        length,
                                        attributeSelected,
                                        index
                                    )
                                }
                            >
                                <p>
                                    {" "}
                                    {attribute
                                        ? attributeMap.displayValue
                                        : attributeMap.value}
                                </p>
                            </SelectedAttribute>
                        ) : (
                            ""
                        );
                    } else {
                        return (
                            <SelectedAttribute
                                key={attributeMap.id + i}
                                selected={true}
                                swatch={attribute ? attribute[i] : ""}
                            >
                                <p>
                                    {" "}
                                    {attribute
                                        ? attributeMap.displayValue
                                        : attributeMap.value}
                                </p>
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
