import React, { Component } from "react";
import CartItem from "../CartItem";
import { CheckOutCart, Line } from "./style";
import { connect } from "react-redux";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { totalPrice, newCart } from "../../Store/actions";
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
        let currency = "";
        let price = "";
        let symbol = "";
        let x = 0;
        const length = this.props.state.counters.products.length;
        let qtd = 0;

        if (length === 0) {
            return;
        }

        if (this.props.state.currency) {
            currency = this.props.state.currency;
        } else {
            currency =
                this.props.state.counters.products[0].prices[0].currency.label;
        }
        for (
            let i = 0;
            i < this.props.state.counters.products[0].prices.length;
            i++
        ) {
            if (
                this.props.state.counters.products[0].prices[i].currency
                    .label === currency
            ) {
                x = i;
                qtd = this.props.state.counters.products[0].qtd;
                price =
                    this.props.state.counters.products[0].prices[i].amount *
                    qtd;
                symbol =
                    this.props.state.counters.products[0].prices[i].currency
                        .symbol;
            }
        }

        if (length > 1) {
            for (let i = 1; i < length; i++) {
                price +=
                    this.props.state.counters.products[i].prices[x].amount *
                    this.props.state.counters.products[i].qtd;
                qtd += this.props.state.counters.products[i].qtd;
            }
        }

        this.setState({
            price,
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
        return (
            <>
                {this.props.state.counters.products.map((product, index) => (
                    <section key={product.id + index}>
                        <CartItem
                            index={index}
                            products={product}
                            currency={this.props.state.currency}
                        />
                        <Line />
                    </section>
                ))}

                <MyOrder hidden={this.props.state.counters.qtd ? false : true}>
                    <h2>Total</h2>
                    <ItemPrice
                        price={Number(this.props.state.price.price).toFixed(2)}
                        symbol={this.props.state.price.symbol}
                    />
                </MyOrder>

                <CheckOutCart hidden={this.props.hidden}>
                    <Link to="/all">
                        <Button>Continue Shopping</Button>
                    </Link>

                    <Link to="/all">
                        <Button
                            disabled={
                                this.props.state.counters.qtd ? false : true
                            }
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
