import styled from "styled-components";

export const CheckboxesContainer = styled.div`
    display: flex;

    label {
        cursor: pointer;
        margin-right: 10px;
    }

    input[type="checkbox"] {
        width: 15px;
        height: 15px;
        border-radius: 10px;
        cursor: pointer;

        &:first-child {
            margin-left: 0;
        }

        &:after {
            content: "";
            display: flex;
            font-size: 11px;
            align-items: center;
            justify-content: center;
            border-radius: 2px;
            width: 15px;
            height: 15px;
        }

        &:checked:after {
            content: "✓";
            color: ${({ theme }) => theme.primary};
            background-color: ${({ theme }) => theme.button};
        }
    }
`;
