import styled from "styled-components";
import { transparentize } from "polished";

export const CardContainer = styled.div`
    cursor: pointer;
    width: 280px;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    border-radius: 2px;
    margin-bottom: 0.5rem;
    gap: 0.7rem;
    position: relative;
    box-shadow: 1px 0.2px 6px 0px
        ${({ theme }) => transparentize(0.7, theme.secondary)};

    span {
        position: absolute;
        top: 35%;
        right: 25%;
        width: 50%;
        color: ${({ theme }) => transparentize(0.3, theme.secondary)};
        font-size: 1.2rem;
        font-weight: 500;
        font-style: italic;
        text-align: center;
        background-color: rgba(244, 244, 244, 0.35);
        border-radius: 15px;
        opacity: ${(props) => (props.img ? "" : "0;")};
    }

    img {
        height: 350px;
        object-fit: cover;
        filter: ${(props) => (props.img ? "blur(2px);" : "")};
        opacity: ${(props) => (props.img ? "0.85;" : "")};
        -webkit-filter: ${(props) => (props.img ? "blur(2px);" : "")};
    }

    h6,
    p {
        padding-left: 1rem;
    }
`;
