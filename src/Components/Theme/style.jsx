import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    span {
        color: ${({ theme }) => theme.secondary};
        font-size: 0.6rem;
        margin-top: 5px;
        margin-bottom: -5px;
    }
`;
