import React, { Component } from "react";
import { CardContainer } from "./style";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getID } from "../../Store/actions";

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "",
            currencyIndex: 0,
        };
    }

    rerender() {
        let x = 0;
        let currency = this.state.currency;

        if (this.props.state.currency) {
            currency = this.props.state.currency;
        } else {
            currency = this.props.prices[0].currency.label;
        }

        for (let i = 0; i < this.props.prices.length; i++) {
            if (this.props.prices[i].currency.label === currency) {
                x = i;
            }
        }

        this.setState({
            currencyIndex: x,
            currency,
        });
    }

    componentDidUpdate(pp, ps) {
        if (this.props.state.currency !== ps.currency) {
            this.rerender();
        }
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
