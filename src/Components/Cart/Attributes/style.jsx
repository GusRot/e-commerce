import styled from "styled-components";

export const CartAttribute = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const SelectedAttribute = styled.div`
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.secondary};
    background-color: ${(props) => (props.selected ? "black" : "")};
    color: ${(props) => (props.selected ? "#e5e5e5" : "")};
    padding: 0.4rem;

    &:hover {
        background-color: ${(props) =>
            props.selected ? "black" : "rgba(0,0,0,0.3)"};
    }
`;
