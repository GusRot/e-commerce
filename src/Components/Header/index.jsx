import React, { Component } from "react";
import {
    HeaderContainer,
    HeaderFixed,
    OptionsContainer,
    SelectContainer,
} from "./style";
import { AiOutlineShoppingCart } from "react-icons/ai";
import SelectComponent from "../SelectComponent";
import Theme from "../Theme";
import CartModal from "../CartModal";
import { Link } from "react-router-dom";
import { Category3 } from "../Router/Clothes";
import { Category2 } from "../Router/Tech";
import { Category1 } from "../Router/AllCategories";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false };
        this.handleModalOpen = this.handleModalOpen.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
    }

    handleModalOpen() {
        this.setState({ modal: true });
    }

    handleModalClose() {
        this.setState({ modal: false });
    }

    render() {
        return (
            <HeaderFixed>
                <HeaderContainer>
                    <OptionsContainer>
                        <Link to="/all">
                            <h5>{Category1.toUpperCase()}</h5>
                        </Link>
                        <Link to="/tech">
                            <h5>{Category2.toUpperCase()}</h5>
                        </Link>
                        <Link to="/clothes">
                            <h5>{Category3.toUpperCase()}</h5>
                        </Link>
                    </OptionsContainer>
                    <div>
                        <Theme
                            themeFunction={this.props.themeFunction.bind(this)}
                            theme={this.props.theme}
                        />
                    </div>
                    <SelectContainer id="selectContainer">
                        <SelectComponent theme={this.props.theme} />
                        <AiOutlineShoppingCart
                            onClick={this.handleModalOpen}
                            style={{
                                padding: "0px 0.25rem",
                                cursor: "pointer",
                                height: "1.2rem",
                                width: "1.6rem",
                            }}
                        />
                        <CartModal
                            modal={this.state.modal}
                            close={this.handleModalClose}
                        />
                    </SelectContainer>
                </HeaderContainer>
            </HeaderFixed>
        );
    }
}

export default Header;
