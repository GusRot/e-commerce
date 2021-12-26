import { transparentize } from "polished";

const customSelect = {
    control: (styles, state) => ({
        ...styles,
        backgroundColor: state.selectProps.colors.primary,
        border: "none",
        gap: "0px",
        width: "75px",
        cursor: "pointer",
        boxShadow: "none",
    }),
    dropdownIndicator: (styles) => ({
        ...styles,
        padding: "0",
        width: "16px",
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        width: "0",
    }),
    input: () => ({
        width: "0",
        padding: "0px",
    }),
    singleValue: (styles, state) => ({
        ...styles,
        marginLeft: "0px",
        color: state.selectProps.colors.secondary,
    }),
    indicatorsContainer: (styles) => ({
        ...styles,
        marginRight: "7px",
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: "pointer",

        backgroundColor: transparentize(
            0.9,
            state.selectProps.colors.secondary
        ),
    }),
    container: (styles) => ({
        ...styles,
        padding: "0px",
    }),
    valueContainer: (styles) => ({
        ...styles,
        padding: "0px",
        margin: "0px",
    }),
    menuList: (styles, state) => ({
        ...styles,
        backgroundColor: state.selectProps.colors.primary,
        borderRadius: "2px",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "0px",
        margin: "0px",
        color: state.selectProps.colors.secondary,
    }),
};

export default customSelect;
