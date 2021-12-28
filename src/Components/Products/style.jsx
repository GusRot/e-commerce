import styled from "styled-components";

export const ContainerSlider = styled.div`
    max-width: 1024px;
    margin: 0px auto;
    padding: 4.5rem 1rem 0 1rem;

    section {
        width: 650px;
        display: flex;

        div:first-child {
            width: 200px;
        }

        img {
            object-fit: contain;
        }
    }
`;
