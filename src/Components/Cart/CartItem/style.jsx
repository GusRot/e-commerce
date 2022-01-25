import styled from "styled-components";

export const CartContainer = styled.header`
    min-height: 14rem;
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 10rem;
    gap: 1rem;

    img {
        max-height: 12rem;
    }

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
    align-self: start;

    h4 {
        font-size: 1.875rem;
        line-height: 1.8rem;
        font-weight: 400;
        word-break: break-all;
    }

    h2 {
        font-weight: 600;
        line-height: 1.8rem;
        font-size: 1.875rem;
        word-break: break-all;
    }

    h3 {
        font-weight: bold;
        font-size: 1.2rem;
        display: none;
    }

    h6 {
        font-size: 1.5rem;
        margin: 0.7rem 0 0.35rem;
        font-weight: 700;
    }

    p {
        padding: 0.3rem 0;
        min-width: 3rem;
    }

    span {
        font-weight: 700;
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
