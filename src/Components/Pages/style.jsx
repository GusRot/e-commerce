import styled from "styled-components";
import { transparentize } from "polished";

export const PagesContainer = styled.div`
    max-width: 1240px;
    margin: 0px auto;
    padding: 5rem 0rem 0 0rem;
    flex-wrap: wrap;
    min-width: fit-content;

    h1 {
        line-height: 4.2rem;
        font-weight: 400;
        font-size: 2.6rem;
        margin-bottom: 5rem;
        padding-left: 1.3rem;
    }

    a {
        pointer-events: none;
    }
`;

export const ProductsContainer = styled.div`
    display: flex;
    gap: 0.65rem;

    > div:first-child {
        width: 20%;

        > div {
            padding: 1.3rem;
            margin-left: 1.3rem;
            min-width: 150px;
            height: fit-content;
            border: 1px solid ${({ theme }) => transparentize(0.85, theme.secondary)};
        } 
    }
`
export const CardsContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem 2.3rem;

    > a {
        justify-self: end;
    }

    @media (max-width: 1240px) {
        gap: 2.5rem 1.5rem;
    }

    @media (max-width: 1200px) {
        gap: 1.5rem 1rem;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        
        > a {
            justify-self: center;
        }
    }
`;
