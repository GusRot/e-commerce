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
                        <Link to="/woman">
                            <h5>ALL</h5>
                        </Link>
                        <Link to="/men">
                            <h5>TECH</h5>
                        </Link>
                        <Link to="/kids">
                            <h5>CLOTHES</h5>
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
                                cursor: "pointer",
                                height: "1.2rem",
                                width: "1.2rem",
                            }}
                        />
                        <CartModal
                            modal={this.state.modal}
                            open={this.handleModalOpen}
                            close={this.handleModalClose}
                        />
                    </SelectContainer>
                </HeaderContainer>
            </HeaderFixed>
        );
    }
}

export default Header;
