import styled from "styled-components";
import { transparentize } from "polished";

export const CardContainer = styled.div`
    pointer-events: ${({img}) => (img ? "none" : "all")};
    width: 18.5rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    gap: 0.7rem;
    position: relative;
    transition: 0.1s;

    &:hover {
        box-shadow: 1px 0.2px 6px 0px
            ${({ theme }) => transparentize(0.9, theme.secondary)};
    }

    div {
        display: flex;
        justify-content: center;
    }

    span {
        position: absolute;
        top: 35%;
        right: 25%;
        width: 50%;
        color: #8d8f9a;
        font-size: 1.2rem;
        font-weight: 500;
        font-style: italic;
        text-align: center;
        border-radius: 15px;
        opacity: ${({img}) => (img ? "" : "0;")};
    }

    img {
        height: 350px;
        width: 17.5rem;
        object-fit: fill;
        filter: ${({img}) => (img ? "blur(0.5px);" : "")};
        opacity: ${({img}) => (img ? "0.65;" : "")};
        -webkit-filter: ${({img}) => (img ? "blur(0.5px);" : "")};
    }

    h6,
    p {
        padding-left: 0.5rem;
    }
`;
