import styled from "styled-components";
import { transparentize } from "polished";

export const CartAttribute = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const SelectedAttribute = styled.div`
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.secondary};
    background-color: ${(props) => (props.selected ? "black" : "")};
    color: ${(props) => (props.selected ? "#e5e5e5" : "")};
    padding: 0.4rem;
    background-color: ${(props) =>
        props.swatch ? transparentize(0.85, props.swatch) : ""};

    &:hover {
        background-color: ${(props) =>
            props.selected ? "black" : "rgba(0,0,0,0.3)"};
        background-color: ${(props) =>
            props.swatch ? transparentize(0.45, props.swatch) : ""};
        border-color: ${(props) =>
            props.swatch ? transparentize(0.45, props.swatch) : ""};
    }
`;
