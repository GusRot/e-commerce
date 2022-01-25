import styled from "styled-components";
import { transparentize } from "polished";

export const CartAttribute = styled.div`
    display: flex;
    padding: 0 !important;
`;

export const SelectedAttribute = styled.div`
    cursor: pointer;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.secondary};
    color: ${({ selected, swatch }) =>
        selected ? (swatch ? "black" : "white") : ""};
    color: ${({ selected, swatch }) =>
        selected ? (swatch === "#000000" ? "white" : "") : ""};
    padding: ${({ swatch }) => (swatch ? "0.5rem 0rem" : "0.5rem 0.75rem")};
    margin-right: ${({ swatch }) => (swatch ? "0.15rem" : "0.3rem")};
    min-width: 20px;
    width: ${({ swatch }) => (swatch ? "3.5rem" : "")};
    background-color: ${({ selected }) => (selected ? "black" : "")};
    background-color: ${({ selected, swatch, modal }) =>
        !modal
            ? swatch
                ? selected
                    ? transparentize(0.1, swatch)
                    : transparentize(0.85, swatch)
                : ""
            : ""};
    border-color: ${({ selected, swatch }) =>
        swatch ? (selected ? transparentize(0.1, swatch) : "") : ""};

    background-color: ${({ modal, selected }) =>
        modal ? (selected ? "rgba(166, 166, 166, 0.3)" : "") : ""};
    color: ${({ modal, selected, theme }) =>
        modal ? (selected ? transparentize(0.5, theme.secondary) : "") : ""};
    border: ${({ modal, selected, theme }) =>
        modal ? (selected ? "1px solid rgba(234, 240, 248, 0.3)" : "") : ""};

    &:hover {
        background-color: ${({ selected }) =>
            selected ? "" : "rgba(0,0,0,0.3)"};
        background-color: ${({ selected, swatch }) =>
            selected ? "" : swatch ? transparentize(0.45, swatch) : ""};
        border-color: ${({ swatch }) =>
            swatch ? transparentize(0.45, swatch) : ""};
    }
`;
