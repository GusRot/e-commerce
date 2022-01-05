import React, { Component } from "react";
import { CardContainer } from "./style";

class Card extends Component {
    render() {
        return (
            <CardContainer img={!this.props.inStock}>
                <img src={this.props.image} />
                <span>OUT OF STOCK</span>
                <p>{this.props.name}</p>
                <h6>$ {this.props.prices[0].amount}</h6>
            </CardContainer>
        );
    }
}

export default Card;
