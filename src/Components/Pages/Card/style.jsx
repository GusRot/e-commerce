import styled from "styled-components";
import { transparentize } from "polished";

export const CardContainer = styled.div`
    pointer-events: all;
    width: 24rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    gap: 0.7rem;
    position: relative;
    transition: 0.1s;

    &:hover {
        box-shadow: 1px 0.2px 6px 0px
            ${({ theme }) => transparentize(0.9, theme.secondary)};

        div div {
            visibility: visible;
        }
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
        font-size: 1.4rem;
        font-weight: 400;
        text-align: center;
        border-radius: 15px;
        opacity: ${({ img }) => (img ? "" : "0;")};
    }

    img {
        height: 350px;
        width: 17.5rem;
        object-fit: scale-down;
        filter: ${({ img }) => (img ? "blur(0.5px);" : "")};
        opacity: ${({ img }) => (img ? "0.65;" : "")};
        -webkit-filter: ${({ img }) => (img ? "blur(0.5px);" : "")};
    }

    h6 {
        font-weight: 500;
    }

    p {
        font-weight: 300;
    }
`;

export const PLPCart = styled.div`
    background-color: ${({ theme }) => transparentize(0.25, theme.button)};
    color: ${({ theme }) => theme.primary};
    position: absolute;
    z-index: 2;
    right: 20px;
    top: 20.5rem;
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    visibility: hidden;

    &:hover {
        background-color: ${({ theme }) => theme.button};
    }
`;
