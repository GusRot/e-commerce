import React, { Component } from "react";
import CartItem from "../CartItem";
import { CheckOutCart, Line } from "./style";
import { connect } from "react-redux";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import {
    totalPrice,
    newCart,
    defineCurrency,
    definePrice,
} from "../../Store/actions";
import { MyOrder } from "./style";
import ItemPrice from "../../common/Item/ItemPrice";
class CartComponent extends Component {
    constructor(props) {
        super(props);
        this.closeOrder = this.closeOrder.bind(this);
        this.state = {
            price: "",
            symbol: "",
            currency: "",
            qtd: 0,
        };
    }
    rerender() {
        const length = this.props.state.counters.products.length;

        if (length === 0) {
            return;
        }

        const currency = defineCurrency(
            this.props.state.currency,
            this.props.state.counters.products[0].prices
        );

        const { price, symbol, x, quantity } = definePrice(
            this.props.state.counters.products[0].prices,
            currency,
            this.props.state.counters.products[0].qtd
        );
        let newPrice = price;
        let qtd = quantity;

        if (length > 1) {
            for (let i = 1; i < length; i++) {
                newPrice +=
                    this.props.state.counters.products[i].prices[x].amount *
                    this.props.state.counters.products[i].qtd;
                qtd += this.props.state.counters.products[i].qtd;
            }
        }

        this.setState({
            price: newPrice,
            currency,
            symbol,
            qtd,
        });

        this.props.totalPrice(this.state);
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 10);
    }

    componentDidUpdate(pp, ps) {
        if (this.props.state.counters.qtd !== ps.qtd) {
            this.rerender();
        }

        if (this.props.state.currency) {
            if (this.props.state.currency !== ps.currency) {
                this.rerender();
            }
        }
    }

    closeOrder() {
        alert("Thank you for your purchase");
        this.props.newCart();
    }

    render() {
        const { state, hidden } = this.props;
        return (
            <>
                {state.counters.products.map((product, index) => (
                    <section key={product.id + index}>
                        <CartItem
                            index={index}
                            products={product}
                            currency={state.currency}
                        />
                        <Line />
                    </section>
                ))}

                <MyOrder hidden={state.counters.qtd ? false : true}>
                    <h2>Total</h2>
                    <ItemPrice
                        price={Number(state.price.price).toFixed(2)}
                        symbol={state.price.symbol}
                    />
                </MyOrder>

                <CheckOutCart hidden={hidden}>
                    <Link to="/all">
                        <Button>Continue Shopping</Button>
                    </Link>

                    <Link to="/all">
                        <Button
                            disabled={state.counters.qtd ? false : true}
                            submit={this.closeOrder.bind(this)}
                        >
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
        totalPrice: (price) => dispatch(totalPrice(price)),
        newCart: () => dispatch(newCart()),
    };
};

const mapStateToProps = (state) => {
    return {
        state: state,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);
