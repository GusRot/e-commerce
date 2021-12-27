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

class Header extends Component {
    render() {
        return (
            <HeaderFixed>
                <HeaderContainer>
                    <OptionsContainer>
                        <h3>MEN</h3>
                        <h3>WOMAN</h3>
                        <h3>KID</h3>
                    </OptionsContainer>
                    <div>
                        <Theme
                            themeFunction={this.props.themeFunction.bind(this)}
                            theme={this.props.theme}
                        />
                    </div>
                    <SelectContainer id="selectContainer">
                        <SelectComponent theme={this.props.theme} />
                        <AiOutlineShoppingCart style={{ cursor: "pointer" }} />
                        <CartModal />
                    </SelectContainer>
                </HeaderContainer>
            </HeaderFixed>
        );
    }
}

export default Header;
