import React, { Component } from "react";

class ItemPrice extends Component {
    render() {
        return (
            <>
                <h3>Price</h3>
                <h6>$ {this.props.price}</h6>
            </>
        );
    }
}

export default ItemPrice;
