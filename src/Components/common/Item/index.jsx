import React, { Component } from "react";
import ItemName from "./ItemName";
import ItemPrice from "./ItemPrice";

class Item extends Component {
    render() {
        const { symbol, price, text, title } = this.props;
        return (
            <div>
                <ItemName text={text} title={title} />
                <ItemPrice symbol={symbol} price={price} />
            </div>
        );
    }
}

export default Item;
