import React, { Component } from "react";
import Attribute from "../Cart/Attributes";
import { ContainerSlider } from "./style";
import VerticalSlider from "./VerticalSlider";
import Button from "../Button";
import { CartInfo } from "../Cart/CartItem/style";
import ItemName from "../Cart/CartItem/Item/ItemName";
import ItemPrice from "../Cart/CartItem/Item/ItemPrice";
import { connect } from "react-redux";
import { newCartItem } from "../Store/actions";

class Products extends Component {
    render() {
        return (
            <ContainerSlider>
                <section>
                    <VerticalSlider
                        slides={this.props.counters.products[0].img}
                    />
                </section>
                <CartInfo>
                    <ItemName
                        text={this.props.counters.products[0].text}
                        title={this.props.counters.products[0].title}
                    />
                    <span>Size:</span>
                    <Attribute
                        selected={this.props.counters.products[0].attribute}
                        attributes={this.props.counters.products[0].attributes}
                        index={0}
                    />
                    <ItemPrice price={this.props.counters.products[0].price} />
                    <Button
                        submit={() =>
                            this.props.newCartItem(
                                this.props.counters.products[0]
                            )
                        }
                    >
                        ADD TO CART
                    </Button>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Expedita, nihil? Accusantium vero eligendi neque
                        pariatur. Enim fugiat aspernatur nulla deserunt nesciunt
                        quo eligendi sunt, consequatur maiores at, accusamus
                        veniam. Nam?
                    </p>
                </CartInfo>
            </ContainerSlider>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newCartItem: (i) => dispatch(newCartItem(i)),
    };
};

const mapStateToProps = (state) => {
    return { counters: state.counters };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
