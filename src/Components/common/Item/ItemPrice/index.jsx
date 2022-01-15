import React, { Component } from "react";

class ItemPrice extends Component {
    render() {
        const {symbol, price} = this.props
        return (
            <>
                <h3>Price:</h3>
                <h6>
                    {symbol} {price}
                </h6>
            </>
        );
    }
}

export default ItemPrice;
