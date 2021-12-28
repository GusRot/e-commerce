import styled from "styled-components";

export const ContainerSlider = styled.div`
    display: flex;
    gap: 2rem;
    max-width: 1024px;
    margin: 0px auto;
    padding: 6.5rem 1rem 0 1rem;

    section {
        width: 650px;
        display: flex;

        div:first-child {
            width: 130px;
        }

        img {
            object-fit: contain;
        }
    }
    div {
        h3 {
            display: inline-block;
            margin-top: 1.2rem;
        }

        h2 {
            padding-bottom: 0rem;
        }
    }

    p {
        text-align: justify;
    }
`;
