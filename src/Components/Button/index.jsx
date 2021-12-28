import React from "react";
import { ButtonContainer } from "./style";

const Button = ({ children }) => (
    <ButtonContainer type="submit">{children}</ButtonContainer>
);

export default Button;
