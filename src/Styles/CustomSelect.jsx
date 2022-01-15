import { transparentize } from "polished";

const customSelect = {
    control: (styles, state) => ({
        ...styles,
        backgroundColor: state.selectProps.colors.header,
        border: "none",
        gap: "0px",
        width: "4.2rem",
        cursor: "pointer",
        boxShadow: "none",
        paddingLeft: "1.7rem",
    }),
    dropdownIndicator: (styles) => ({
        ...styles,
        padding: "0",
        width: "13px",
        marginLeft: "-15px",
        marginBottom: "-3px",
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        width: "0",
    }),
    singleValue: (styles, state) => ({
        ...styles,
        marginRight: "15px",
        color: state.selectProps.colors.secondary,
    }),
    indicatorsContainer: (styles) => ({
        ...styles,
        marginRight: "0px",
    }),
    option: (styles, state) => ({
        ...styles,
        cursor: "pointer",
        color: state.selectProps.colors.secondary,
        backgroundColor: state.selectProps.colors.primary,
        justifyContent: "center",
        "&:hover": {
            backgroundColor: transparentize(
                0.95,
                state.selectProps.colors.button
            ),
        },
    }),
    container: (styles) => ({
        ...styles,
        padding: "0px",
    }),
    valueContainer: (styles) => ({
        ...styles,
        padding: "0px",
        margin: "0px",
        justifyContent: "flex-end",
    }),

    menuList: (styles, state) => ({
        ...styles,
        backgroundColor: state.selectProps.colors.primary,
        color: state.selectProps.colors.secondary,
        flexDirection: "column",
    }),
};

export default customSelect;
