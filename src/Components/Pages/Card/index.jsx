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

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 50);
    }

    componentDidUpdate(pp, ps) {
        if (this.props.state.currency !== ps.currency) {
            this.rerender();
        }
    }

    render() {
        return (
            <Link
                to={`/products/${this.props.id}`}
                onClick={(e) => this.props.getID(e, this.props.id)}
            >
                <CardContainer img={!this.props.inStock}>
                    <img src={this.props.image} alt={"product"} />
                    <span>OUT OF STOCK</span>
                    <p>{this.props.name}</p>
                    <h6>
                        {
                            this.props.prices[this.state.currencyIndex].currency
                                .symbol
                        }{" "}
                        {this.props.prices[this.state.currencyIndex].amount}
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
