import React, { Component } from "react";

class ItemName extends Component {
    render() {
        const { title, text } = this.props;
        return (
            <>
                <h2>{title}</h2>
                <h4>{text}</h4>
            </>
        );
    }
}

export default ItemName;
