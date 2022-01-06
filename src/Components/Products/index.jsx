import React, { Component } from "react";
import { connect } from "react-redux";
import { newCartItem } from "../Store/actions";
import Product from "../Product";

class Products extends Component {
    render() {
        return (
            <Product
                products={this.props.state.counters.products}
                api={this.props.state.api}
                newCartItem={newCartItem}
                currency={this.props.state.currency}
            ></Product>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newCartItem: (i) => dispatch(newCartItem(i)),
    };
};

const mapStateToProps = (state) => {
    return { state: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
