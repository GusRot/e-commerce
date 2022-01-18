import React, { Component } from "react";
import { CardContainer, PLPCart } from "./style";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getID } from "../../Store/actions";
import { AiOutlineShoppingCart } from "react-icons/ai";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "",
            currencyIndex: 0,
        };
    }

    rerender() {
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
            this.props.state,
            this.props.prices
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

    render() {
        const { id, inStock, image, name, prices } = this.props;
        return (
            <Link
                to={`/products/${id}`}
                onClick={(e) => this.props.getID(e, id)}
            >
                <CardContainer img={!inStock}>
                    <div>
                        <img src={image} alt={"product"} />
                        <PLPCart>
                            <AiOutlineShoppingCart
                                onClick={() => {}}
                                className="cartIcon"
                            />
                        </PLPCart>
                    </div>
                    <span>OUT OF STOCK</span>
                    <p>{name}</p>
                    <h6>
                        {prices[this.state.currencyIndex].currency.symbol}{" "}
                        {prices[this.state.currencyIndex].amount}
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
