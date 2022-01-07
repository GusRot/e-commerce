import React from "react";
import { ButtonContainer } from "./style";

const Button = ({ children, submit = console.log("ok") }) => (
    <ButtonContainer onClick={submit}>{children}</ButtonContainer>
);

export default Button;
