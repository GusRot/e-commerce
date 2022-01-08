import styled from "styled-components";
import { transparentize } from "polished";

export const CartAttribute = styled.div`
    display: flex;
    gap: 0.2rem;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding: 0 !important;
`;

export const SelectedAttribute = styled.div`
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.secondary};
    color: ${(props) =>
        props.selected ? (props.swatch ? "black" : "#e5e5e5") : ""};
    color: ${(props) =>
        props.selected ? (props.swatch === "#000000" ? "white" : "") : ""};
    padding: 0.4rem;
    background-color: ${(props) => (props.selected ? "black" : "")};
    background-color: ${(props) =>
        props.swatch
            ? props.selected
                ? transparentize(0.1, props.swatch)
                : transparentize(0.85, props.swatch)
            : ""};
    border-color: ${(props) =>
        props.swatch
            ? props.selected
                ? transparentize(0.1, props.swatch)
                : ""
            : ""};

    &:hover {
        background-color: ${(props) =>
            props.selected ? "" : "rgba(0,0,0,0.3)"};
        background-color: ${(props) =>
            props.selected
                ? ""
                : props.swatch
                ? transparentize(0.45, props.swatch)
                : ""};
        border-color: ${(props) =>
            props.swatch ? transparentize(0.45, props.swatch) : ""};
    }
`;
