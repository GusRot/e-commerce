import React, { Component } from "react";
import Attribute from "../Cart/Attributes";
import { ContainerSlider } from "./style";
import VerticalSlider from "./VerticalSlider";
import Button from "../Button";
import { CartInfo } from "../Cart/CartItem/style";
import ItemName from "../Cart/CartItem/Item/ItemName";
import ItemPrice from "../Cart/CartItem/Item/ItemPrice";
import { Link } from "react-router-dom";
import { graphql } from "react-apollo";
import { LOAD_PRODUCT } from "../GraphQL/Queries";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            brand: "",
            gallery: [],
            description: "",
        };
    }

    rerender() {
        this.setState({
            name: this.props.data.product.name,
            brand: this.props.data.product.brand,
            gallery: [...this.props.data.product.gallery],
            description: this.props.data.product.description,
        });
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 150);
    }

    render() {
        return (
            <ContainerSlider>
                {console.log(this.props.data.product)}
                <section>
                    <VerticalSlider slides={this.state.gallery} />
                </section>
                <CartInfo>
                    <ItemName title={this.state.name} text={this.state.brand} />
                    <span>Size:</span>
                    <Attribute
                        selected={this.props.products[0].attribute}
                        attributes={this.props.products[0].attributes}
                        index={0}
                    />
                    <ItemPrice price={this.props.products[0].price} />
                    <Link to="/cart">
                        <Button
                            submit={() =>
                                this.props.newCartItem(this.props.products[0])
                            }
                        >
                            ADD TO CART
                        </Button>
                    </Link>
                    {this.state.description.replace(/<[^>]*>?/gm, "")}
                </CartInfo>
            </ContainerSlider>
        );
    }
}

export default graphql(LOAD_PRODUCT, {
    options: (props) => {
        return {
            variables: {
                productId: props.api,
            },
        };
    },
})(Product);
