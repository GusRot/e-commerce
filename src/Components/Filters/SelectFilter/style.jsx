import styled from "styled-components";

export const SelectContainer = styled.select`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    width: 100%;
`;
