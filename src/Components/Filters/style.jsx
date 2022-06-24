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
export const CheckboxesContainer = styled.div`
    input[type="checkbox"] {
        width: 15px;
        height: 15px;
        border-radius: 10px;
        cursor: pointer;

        &:first-child {
            margin-left: 0;
        }

        &:after {
            content: "";
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 2px;
            width: 15px;
            height: 15px;
        }

        &:checked:after {
            content: "✓";
            color: ${({ theme }) => theme.primary};
            background-color: ${({ theme }) => theme.button};
        }
    }
`;

export const SelectContainer = styled.select`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    width: 100%;
`;

export const ColorsFilter = styled.div`
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.15rem;
    }
`;

export const ColorsContainer = styled.li`
    height: 1rem;
    width: ${({ selected }) => (selected ? "3rem" : "2rem")};
    cursor: pointer;
    transition: 0.2s;
    margin-bottom: 0.4rem;
    background-color: ${({ color, theme }) => (color ? color : theme.button)};
`;
