import styled from "styled-components";
import { transparentize } from "polished";

export const Line = styled.div`
    height: ${({ hidden }) => (hidden ? "0px" : "1px")};
    background-color: ${({ theme }) => transparentize(0.85, theme.secondary)};
    width: 100%;
    margin: 0.5rem 0;
    display: ${({ hidden }) => (hidden ? "none" : "")};
`;

export const CheckOutCart = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    display: ${({ hidden }) => (hidden ? "none !important" : "")};

    a {
        height: 50px;
        width: 45%;
        margin: 10px 10px 10px;

        button {
            margin: 0;
        }

        &:first-child button {
            background-color: ${({ theme }) => theme.header};
            border: 1px solid ${({ theme }) => theme.secondary};
            color: ${({ theme }) => theme.secondary};

            &:hover {
                background-color: ${({ theme }) => theme.primary};
            }
        }
    }
`;

export const MyOrder = styled.div`
    display: ${({ hidden }) => (hidden ? "none !important" : "")};
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 0.8rem;

    h3 {
        display: none;
    }

    h2,
    h6 {
        font-size: 1.5rem;
        line-height: 2rem;
        margin: 0.3rem 0;
    }
`;
