import styled from "styled-components";
import { transparentize } from "polished";

export const HeaderFixed = styled.header`
    height: 3.3rem;
    background-color: ${({ theme }) => theme.header};
    border: 1px solid ${({ theme }) => transparentize(0.9, theme.secondary)};
    position: fixed;
    width: 100%;
    z-index: 1;
    margin-bottom: 5rem;

    div {
        display: flex;
        align-items: center;
    }
`;

export const HeaderContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1024px;
    position: relative;
    margin: 0 auto;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    

        h5 {
            font-size: 1.2rem;
            color: ${({ theme }) => theme.secondary};
            position: relative;
            cursor: pointer;
            &:after {
                content: "";
                background-color: ${({ theme }) => theme.button};
                width: 0;
                height: 1.2px;
                position: absolute;
                bottom: -16px;
                left: 0;
                transition: 0.3s;
            }

            &:hover {
                color: ${({ theme }) => theme.button};
            }

            &:hover::after {
                width: 100%;
            }
        }

    }
`;

export const OptionsContainer = styled.div`
    gap: 1rem;
    margin-right: 1.8rem;

    h5 {
        text-align: center;
        width: 4.5rem;
    }
`;

export const SelectContainer = styled.div`
    width: 13.5rem;
    justify-content: flex-end;
`;

export const ItemsOnBag = styled.div`
    background-color: ${({ theme, hidden }) =>
        hidden ? "transparent" : theme.secondary};
    color: ${({ theme }) => theme.primary};
    position: absolute;
    z-index: 2;
    right: 5px;
    top: 10px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
`;
