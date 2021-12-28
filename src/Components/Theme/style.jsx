import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &:hover span:after {
        width: 100%;
    }

    span {
        color: ${({ theme }) => theme.secondary};

        margin-top: 5px;
        margin-bottom: -5px;
        font-size: 0.6rem;
        position: relative;

        &:after {
            content: "";
            background-color: ${({ theme }) => theme.button};
            width: 0;
            height: 1.2px;
            position: absolute;
            bottom: -3px;
            left: 0;
            transition: 0.3s;
        }
    }
`;
