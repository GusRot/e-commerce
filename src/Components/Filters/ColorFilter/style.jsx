import styled from "styled-components";

export const ColorsFilter = styled.div`
    opacity: ${({ active }) => (active ? "1" : "0.5")};
    pointer-events: ${({ active }) => (active ? "auto" : "none")};

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.15rem;
    }
`;

export const ColorsContainer = styled.li`
    height: 1rem;
    width: ${({ selected }) => (selected ? "2.8rem" : "1.8rem")};
    cursor: pointer;
    transition: 0.2s;
    margin-bottom: 0.4rem;
    background-color: ${({ color, theme }) => (color ? color : theme.button)};
`;
