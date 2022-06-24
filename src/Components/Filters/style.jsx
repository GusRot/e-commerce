import styled from "styled-components";
import { transparentize } from "polished";

export const FiltersContainer = styled.div`
    display: flex;
    flex-direction: column;

    > div {
        background-color: ${({ theme }) =>
            transparentize(0.95, theme.secondary)};
    }

    h3 {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 1rem 0 2rem;
        text-transform: uppercase;
    }

    h4 {
        font-size: 1.125rem;
        margin: 1rem 0;
        text-transform: uppercase;
        font-weight: 600;
    }

    @media (max-width: 1000px) {
        h3 {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 800px) {
        h3 {
            font-size: 1.2rem;
        }

        h4 {
            font-size: 1rem;
        }
    }
`;


