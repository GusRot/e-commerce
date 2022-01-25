import styled from "styled-components";

export const PagesContainer = styled.div`
    max-width: 1240px;
    margin: 0px auto;
    padding: 5rem 0rem 0 0rem;
    flex-wrap: wrap;

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

export const CardsContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem 2.3rem;
`;
