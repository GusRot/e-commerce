import React, { Component } from "react";
import CartComponent from "../../Cart/CartComponent";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { ModalCartContainer, MyBag, MyOrder, CheckOut } from "./style";
import ItemPrice from "../../common/Item/ItemPrice";
import { connect } from "react-redux";
import { newCart } from "../../Store/actions";

class ModalCart extends Component {
    constructor(props) {
        super(props);
        this.closeOrder = this.closeOrder.bind(this);
        this.state = {
            price: "",
            symbol: "",
            currency: "",
        };
    }

    closeOrder() {
        alert("Thank you for your purchase");
        this.props.close();
        this.props.newCart();
    }

    rerender() {
        let currency = "";
        let price = "";
        let symbol = "";
        let x = 0;
        const length = this.props.state.counters.products.length;

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
                price = this.props.state.counters.products[0].prices[i].amount;
                symbol =
                    this.props.state.counters.products[0].prices[i].currency
                        .symbol;
            }
        }

        if (length > 1) {
            for (let i = 1; i < length; i++) {
                price += this.props.state.counters.products[i].prices[x].amount;
            }
        }

        this.setState({
            price,
            currency,
            symbol,
        });
        console.log(this.state);
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 50);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.currency !== this.props.state.currency) {
            this.rerender();
        }
    }

    render() {
        return (
            <ModalCartContainer>
                <MyBag>
                    <h3>My Bag,</h3>
                    <span>2</span>
                </MyBag>
                <CartComponent hidden={true} />
                <MyOrder>
                    <h2>Total</h2>
                    <ItemPrice
                        price={Number(this.state.price).toFixed(2)}
                        symbol={this.state.symbol}
                    />
                </MyOrder>
                <CheckOut>
                    <Link to="/cart">
                        <Button submit={this.props.close}>View Bag</Button>
                    </Link>

                    <Link to="/">
                        <Button submit={this.closeOrder}>Check Out</Button>
                    </Link>
                </CheckOut>
            </ModalCartContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newCart: () => dispatch(newCart()),
    };
};

const mapStateToProps = (state) => {
    return { state: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);
