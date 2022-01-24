import React, { Component } from "react";
import { CardContainer, PLPCart } from "./style";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getID } from "../../Store/actions";
import { AiOutlineShoppingCart } from "react-icons/ai";

class Card extends Component {
    constructor(props) {
        super(props);
        this.toCart = this.toCart.bind(this);
        this.state = {
            currency: "",
            currencyIndex: 0,
        };
    }

    rerender() {
        const { state, prices } = this.props;
        function defineCurrency(currency, state, prices) {
            let x = 0;
            let newCurrency = currency;
            if (state.currency) {
                newCurrency = state.currency;
            } else {
                newCurrency = prices[0].currency.label;
            }

            for (let i = 0; i < prices.length; i++) {
                if (prices[i].currency.label === newCurrency) {
                    x = i;
                }
            }
            return { x, newCurrency };
        }

        const { x, newCurrency } = defineCurrency(
            this.state.currency,
            state,
            prices
        );

        this.setState({
            currencyIndex: x,
            currency: newCurrency,
        });
    }

    componentDidUpdate(pp, ps) {
        if (this.props.state.currency !== ps.currency) {
            this.rerender();
        }
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 10);
    }

    toCart(stock) {
        if (!stock) {
            alert("out of stock");
        }
    }

    render() {
        const { id, inStock, image, name, prices, getID } = this.props;
        const { currencyIndex } = this.state;
        return (
            <Link to={`/products/${id}`} onClick={(e) => getID(e, id)}>
                <CardContainer img={!inStock}>
                    <div>
                        <img src={image} alt={"product"} />
                        <PLPCart>
                            <AiOutlineShoppingCart
                                onClick={(e) => this.toCart(inStock)}
                                className="cartIcon"
                            />
                        </PLPCart>
                    </div>
                    <span>OUT OF STOCK</span>
                    <p>{name}</p>
                    <h6>
                        {prices[currencyIndex].currency.symbol}{" "}
                        {prices[currencyIndex].amount}
                    </h6>
                </CardContainer>
            </Link>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getID: (e, id) => dispatch(getID(e, id)),
    };
};

const mapStateToProps = (state) => {
    return {
        state: state,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
