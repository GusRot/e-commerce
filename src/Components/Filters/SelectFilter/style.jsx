import styled from "styled-components";

export const Selects = styled.div`
    opacity: ${({ active }) => (active ? "1" : "0.5")};
`;

export const SelectContainer = styled.select`
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    cursor: pointer;
    width: 100%;
`;
