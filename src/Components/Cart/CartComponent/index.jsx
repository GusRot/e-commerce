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
        const { currency, counters } = this.props.state;
        const { products } = counters;
        const length = products.length;

        if (length === 0) {
            return;
        }

        const newCurrency = defineCurrency(currency, products[0].prices);

        const { price, symbol, x, quantity } = definePrice(
            products[0].prices,
            newCurrency,
            products[0].qtd
        );
        let newPrice = price * quantity;
        let qtd = quantity;

        if (length > 1) {
            for (let i = 1; i < length; i++) {
                newPrice += products[i].prices[x].amount * products[i].qtd;
                qtd += products[i].qtd;
            }
        }

        this.setState({
            price: newPrice,
            currency: newCurrency,
            symbol,
            qtd,
        });

        this.props.totalPrice(this.state);
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 10);
    }

    componentDidUpdate(pp, ps) {
        const { counters, currency } = this.props.state;
        if (counters.qtd !== ps.qtd) {
            this.rerender();
        }

        if (currency) {
            if (currency !== ps.currency) {
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
        const { currency, counters, price } = state;
        const { products, qtd } = counters;
        return (
            <>
                {products.map((product, index) => (
                    <section key={product.id + index}>
                        <CartItem
                            index={index}
                            products={product}
                            currency={currency}
                            hidden={hidden}
                        />
                        <Line />
                    </section>
                ))}

                <MyOrder hidden={qtd ? false : true}>
                    <h2>Total</h2>
                    <ItemPrice
                        price={Number(price.price).toFixed(2)}
                        symbol={price.symbol}
                    />
                </MyOrder>

                <CheckOutCart hidden={hidden}>
                    <Link to="/all">
                        <Button>Continue Shopping</Button>
                    </Link>

                    <Link to="/all">
                        <Button
                            disabled={qtd ? false : true}
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
