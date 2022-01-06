import React, { Component } from "react";
import { CardContainer } from "./style";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getID } from "../../Store/actions";

class Card extends Component {
    render() {
        return (
            <Link
                to={`/products/${this.props.id}`}
                onClick={(e) => this.props.getID(e, this.props.id)}
            >
                <CardContainer img={!this.props.inStock}>
                    <img src={this.props.image} />
                    <span>OUT OF STOCK</span>
                    <p>{this.props.name}</p>
                    <h6>$ {this.props.prices[0].amount}</h6>
                </CardContainer>
            </Link>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getID: (e, id) => dispatch(getID(e, id)),
    };
};

export default connect(null, mapDispatchToProps)(Card);
