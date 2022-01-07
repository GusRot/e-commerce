import React, { Component } from "react";
import CartComponent from "../../Cart/CartComponent";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { ModalCartContainer, MyBag, MyOrder, CheckOut } from "./style";
import ItemPrice from "../../common/Item/ItemPrice";

class ModalCart extends Component {
    closeOrder() {
        alert("Thank you for your purchase");
    }

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

                    <Button submit={this.closeOrder.bind(this)}>
                        <Link to="/">Check Out</Link>
                    </Button>
                </CheckOut>
            </ModalCartContainer>
        );
    }
}

export default ModalCart;
