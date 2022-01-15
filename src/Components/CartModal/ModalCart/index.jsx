import React, { Component } from "react";
import CartComponent from "../../Cart/CartComponent";
import Button from "../../common/Button";
import { Link } from "react-router-dom";
import { ModalCartContainer, MyBag, CheckOut } from "./style";
import { connect } from "react-redux";
import { newCart } from "../../Store/actions";

class ModalCart extends Component {
    closeOrder() {
        alert("Thank you for your purchase");
        this.props.close();
        this.props.newCart();
    }

    render() {
        const { state, close } = this.props;
        return (
            <ModalCartContainer>
                <MyBag>
                    <h3>My Bag,</h3>
                    <span>{state.counters.qtd}</span>
                </MyBag>
                <CartComponent hidden={true} />
                <CheckOut>
                    <Link to="/cart">
                        <Button
                            disabled={state.counters.qtd ? false : true}
                            submit={close}
                        >
                            View Bag
                        </Button>
                    </Link>

                    <Link to="/">
                        <Button
                            disabled={state.counters.qtd ? false : true}
                            submit={this.closeOrder.bind(this)}
                        >
                            Check Out
                        </Button>
                    </Link>
                </CheckOut>
            </ModalCartContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newCart: () => dispatch(newCart()),
    };
};

const mapStateToProps = (state) => {
    return { state: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCart);
