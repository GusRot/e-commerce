import React, { Component } from "react";
import CartItem from "../CartItem";
import { Line } from "./style";
import { connect } from "react-redux";

class CartComponent extends Component {
    render() {
        return (
            <>
                {this.props.counters.products.map((product, index) => (
                    <section key={product.id + index}>
                        <CartItem index={index} products={product} />
                        <Line />
                    </section>
                ))}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { counters: state.counters };
};

export default connect(mapStateToProps)(CartComponent);
