import React, { Component } from "react";
import Img from "../../../assets/Ciri.jpg";
import { CardContainer } from "./style";

class Card extends Component {
    render() {
        return (
            <CardContainer img={false}>
                <img src={Img} />
                <span>OUT OF STOCK</span>
                <p>asdsadsada</p>
                <h6>$ 50.00</h6>
            </CardContainer>
        );
    }
}

export default Card;
