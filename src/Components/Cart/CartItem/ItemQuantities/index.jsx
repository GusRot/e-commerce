import React, { Component } from "react";
import { CartQtd } from "./style";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";

class ItemQuantities extends Component {
    render() {
        return (
            <CartQtd>
                <AiOutlinePlusSquare
                    style={{
                        cursor: "pointer",
                        height: "2.2rem",
                        width: "2.2rem",
                    }}
                />
                <span>1</span>
                <AiOutlineMinusSquare
                    style={{
                        cursor: "pointer",
                        height: "2.2rem",
                        width: "2.2rem",
                    }}
                />
            </CartQtd>
        );
    }
}

export default ItemQuantities;