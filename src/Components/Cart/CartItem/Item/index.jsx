import React, { Component } from "react";
import ItemName from "./ItemName";
import ItemPrice from "./ItemPrice";

class Item extends Component {
    render() {
        return (
            <div>
                <ItemName text={this.props.text} title={this.props.title} />
                <ItemPrice price={this.props.price} />
            </div>
        );
    }
}

export default Item;
