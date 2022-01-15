import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { Container } from "./style";

const Theme = ({ theme, themeFunction }) => (
    <Container onClick={themeFunction}>
        <IoBagHandleSharp className="logoIcon" />
        <span>{theme.text}</span>
    </Container>
);

export default Theme;
