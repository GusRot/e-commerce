import styled from "styled-components";

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