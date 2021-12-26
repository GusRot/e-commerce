import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { Container } from "./style";
import { buttonLight } from "../../Styles/Palletes";

const Theme = ({ theme, themeFunction }) => (
    <Container onClick={themeFunction}>
        <IoBagHandleSharp
            style={{
                height: "1.5rem",
                width: "1.5rem",
                color: buttonLight,
            }}
        />
        <span>{theme.text}</span>
    </Container>
);

export default Theme;
