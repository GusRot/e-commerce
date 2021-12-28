import React, { Component } from "react";
import CartComponent from "../../Cart/CartComponent";
import Button from "../../Button";
import { Link } from "react-router-dom";
import { ModalCartContainer, MyBag, MyOrder, CheckOut } from "./style";
import ItemPrice from "../../Cart/CartItem/Item/ItemPrice";

class ModalCart extends Component {
    render() {
        return (
            <ModalCartContainer>
                <MyBag>
                    <h3>My Bag,</h3>
                    <span>2</span>
                </MyBag>
                <CartComponent />
                <MyOrder>
                    <h2>Total</h2>
                    <ItemPrice />
                </MyOrder>
                <CheckOut>
                    <Button>
                        <Link to="/cart">View Bag</Link>
                    </Button>
                    <Button>Check Out</Button>
                </CheckOut>
            </ModalCartContainer>
        );
    }
}

export default ModalCart;
