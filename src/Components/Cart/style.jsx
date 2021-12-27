import styled from "styled-components";
import { transparentize } from "polished";

export const ContainerCartComponent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px auto;
    max-width: 1024px;
    padding: 4.5rem 1rem 0 1rem;

    section {
        max-width: 870px;
    }
`;

export const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => transparentize(0.85, theme.secondary)};
    width: 100%;
    margin: 0.5rem 0;
`;
