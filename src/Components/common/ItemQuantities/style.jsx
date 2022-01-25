import styled from "styled-components";
import { transparentize } from "polished";

export const CartQtd = styled.div`
    padding: 0.4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    min-height: 12rem;
    height: 100%;

    span {
        font-size: 1.5rem;
        font-weight: 500;
    }

    #item-add,
    #item-remove {
        &:hover {
            filter: drop-shadow(
                0.5px 0.5px 0.8px
                    ${({ theme }) => transparentize(0.7, theme.secondary)}
            );
        }
    }
`;
