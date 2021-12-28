import React, { Component } from "react";
import ItemName from "./ItemName";
import ItemPrice from "./ItemPrice";

class Item extends Component {
    render() {
        return (
            <div>
                <ItemName />
                <ItemPrice />
            </div>
        );
    }
}

export default Item;
