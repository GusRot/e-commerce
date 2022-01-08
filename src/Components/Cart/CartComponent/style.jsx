import styled from "styled-components";
import { transparentize } from "polished";

export const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => transparentize(0.85, theme.secondary)};
    width: 100%;
    margin: 0.5rem 0;
`;

export const CheckOutCart = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    display: ${(props) => (props.hidden ? "none !important" : "")};

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
