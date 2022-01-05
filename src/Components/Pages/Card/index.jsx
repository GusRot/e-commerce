import React, { Component } from "react";
import { CardContainer } from "./style";
import { Link } from "react-router-dom";

class Card extends Component {
    render() {
        return (
            <Link to="/products">
                <CardContainer img={!this.props.inStock}>
                    <img src={this.props.image} />
                    <span>OUT OF STOCK</span>
                    <p>{this.props.name}</p>
                    <h6>$ {this.props.prices[0].amount}</h6>
                </CardContainer>
            </Link>
        );
    }
}

export default Card;
