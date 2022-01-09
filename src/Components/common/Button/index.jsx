import React from "react";
import { ButtonContainer } from "./style";

const Button = ({ disabled, children, submit = () => {} }) => (
    <ButtonContainer disabled={disabled} onClick={submit}>
        {children}
    </ButtonContainer>
);

export default Button;
