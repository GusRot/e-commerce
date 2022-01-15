import React, { Component } from "react";
import { CartQtd } from "./style";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { incrementCounter, decrementCounter } from "../.././Store/actions";
import { connect } from "react-redux";

class ItemQuantities extends Component {
    render() {
        const { incrementCounter, decrementCounter, qtd, index } = this.props;
        return (
            <CartQtd>
                <AiOutlinePlusSquare
                    onClick={() => incrementCounter(index)}
                    id="item-add"
                    className="counterIcon"
                />
                <span>{qtd}</span>
                <AiOutlineMinusSquare
                    onClick={() => decrementCounter(index)}
                    id="item-remove"
                    className="counterIcon"
                />
            </CartQtd>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: (i) => dispatch(incrementCounter(i)),
        decrementCounter: (i) => dispatch(decrementCounter(i)),
    };
};

export default connect(null, mapDispatchToProps)(ItemQuantities);
