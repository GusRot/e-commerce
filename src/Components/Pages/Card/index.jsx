import React, { Component } from "react";
import Img from "../../../assets/Ciri.jpg";
import { CardContainer } from "./style";

class Card extends Component {
    render() {
        return (
            <CardContainer img={true}>
                <img src={Img} />
                <span>OUT OF STOCK</span>
                <p>asdsadsada</p>
                <p>asdsadsada</p>
                <p>asdsadsada</p>
            </CardContainer>
        );
    }
}

export default Card;
