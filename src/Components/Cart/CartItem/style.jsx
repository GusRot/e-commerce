import styled from "styled-components";

export const CartContainer = styled.header`
    height: 25vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 160px;
    gap: 1rem;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70%;
        height: 100%;
        margin-right: 10px;
    }

    .swiper-scrollbar {
        display: none;
    }
`;

export const CartInfo = styled.div`
    display: flex;
    margin: 0;
    flex-direction: column;
    align-items: start;
    height: 100%;
    padding: 0.25rem 0;
    gap: 0.35rem;
    min-width: 7rem;

    h2,
    h4 {
        font-size: 1.4rem;
        padding-bottom: 2%;
        word-break: break-all;
    }

    h3 {
        font-weight: bold;
        font-size: 1.2rem;
        display: none;
    }

    h6 {
        font-size: 1.2rem;
    }

    span {
        font-weight: bold;
        font-size: 1.2rem;
        margin-bottom: -0.4rem;

        & + div {
            pointer-events: ${({ pointer }) => (pointer ? "none" : "auto")};
        }
    }

    h2 + h4 + div {
        width: 10rem;
        & + div {
            width: 10rem;
        }
        & + div {
            width: 10rem;
        }
    }
`;

export const CarrouselContainer = styled.aside`
    width: 300px;
    height: 100%;

    @media (max-width: 700px) {
        width: 220px;
    }

    @media (max-width: 450px) {
        width: 170px;
    }
`;
