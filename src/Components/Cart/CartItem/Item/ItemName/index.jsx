import React, { Component } from "react";

class ItemName extends Component {
    render() {
        return (
            <>
                <h2>{this.props.title}</h2>
                <h4>{this.props.text}</h4>
            </>
        );
    }
}

export default ItemName;
