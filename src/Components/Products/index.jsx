import React, { Component } from "react";
import { connect } from "react-redux";
import { newCartItem } from "../Store/actions";
import Product from "./Product";

class Products extends Component {
    callRedux(item) {
        const {attributes} = this.props.state.attribute
        this.props.newCartItem(item, attributes);
    }

    render() {
        const { counters, api, currency, attribute } = this.props.state;
        return (
            <>
                <Product
                    products={counters.products}
                    api={api}
                    newCartItem={this.callRedux.bind(this)}
                    currency={currency}
                    attributes={attribute}
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
