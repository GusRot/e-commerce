import styled from "styled-components";

export const CartContainer = styled.div`
    height: 30vh;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        margin-right: 10px;
    }
`;

export const CartInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
    padding: 0.4rem 0;
    gap: 0.5rem;
`;

export const CartAttribute = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

export const CartQtd = styled.div`
    padding: 0.4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 100%;
`;
