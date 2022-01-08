import React, { Component } from "react";
import CartItem from "../CartItem";
import { CheckOutCart, Line } from "./style";
import { connect } from "react-redux";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { newCart } from "../../Store/actions";

class CartComponent extends Component {
    closeOrder() {
        alert("Thank you for your purchase");
        this.props.newCart();
    }

    render() {
        return (
            <>
                {this.props.counters.products.map((product, index) => (
                    <section key={product.id + index}>
                        <CartItem
                            index={index}
                            products={product}
                            currency={this.props.currency}
                        />
                        <Line />
                    </section>
                ))}
                <CheckOutCart hidden={this.props.hidden}>
                    <Link to="/all">
                        <Button>Continue Shopping</Button>
                    </Link>

                    <Link to="/all">
                        <Button submit={this.closeOrder.bind(this)}>
                            Check Out
                        </Button>
                    </Link>
                </CheckOutCart>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newCart: () => dispatch(newCart()),
    };
};

const mapStateToProps = (state) => {
    return {
        counters: state.counters,
        currency: state.currency,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
