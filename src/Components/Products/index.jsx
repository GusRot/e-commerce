import React, { Component } from "react";
import { connect } from "react-redux";
import { newCartItem } from "../Store/actions";
import Product from "./Product";

class Products extends Component {
    callRedux(item) {
        this.props.newCartItem(item, this.props.state.attribute.attributes);
    }

    render() {
        const { state } = this.props;
        return (
            <>
                <Product
                    products={state.counters.products}
                    api={state.api}
                    newCartItem={this.callRedux.bind(this)}
                    currency={state.currency}
                    attributes={state.attribute}
                />
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newCartItem: (i, a) => dispatch(newCartItem(i, a)),
    };
};

const mapStateToProps = (state) => {
    return { state: state };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
