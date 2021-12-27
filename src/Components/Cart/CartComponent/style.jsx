import styled from "styled-components";
import { transparentize } from "polished";

export const Line = styled.div`
    height: 1px;
    background-color: ${({ theme }) => transparentize(0.85, theme.secondary)};
    width: 100%;
    margin: 0.5rem 0;
`;
