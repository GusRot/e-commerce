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
                    } else if (attribute.value !== this.props.state) {
                        return (
                            <SelectedAttribute
                                key={attribute.id + index}
                                selected={false}
                                onClick={() =>
                                    this.props.getAttribute(attribute.value)
                                }
                            >
                                <p>{attribute.displayValue}</p>
                            </SelectedAttribute>
                        );
                    } else {
                        return (
                            <SelectedAttribute
                                key={attribute.id + index}
                                selected={true}
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
        getAttribute: (attribute) => dispatch(getAttribute(attribute)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attribute);
