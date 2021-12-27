import styled from "styled-components";
import { transparentize } from "polished";

export const CardContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 2px;
    position: relative;

    span {
        position: absolute;
        top:35%;
        right: 25%;
        width: 50%;
        color: ${({ theme }) => transparentize(0.3, theme.secondary)};
        font-size: 1.2rem;
        font-weight: 500;
        font-style: italic;
        text-align: center;
        background-color: rgba(244,244,244,0.35);
        border-radius: 15px;
        opacity: ${(props) => (props.img ? "" : "0;")} 
;

    }

    img {
        
        height: 350px;
        object-fit: cover;
        filter: ${(props) => (props.img ? "blur(2px);" : "")} 
        opacity: ${(props) => (props.img ? "0.85;" : "")} 
        -webkit-filter: ${(props) => (props.img ? "blur(2px);" : "")}
    }
`;
