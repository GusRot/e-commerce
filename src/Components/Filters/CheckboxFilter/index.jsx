import React, { Component } from "react";
import { CheckboxesContainer } from "./style";
import { connect } from "react-redux";
import { setFilter } from "../../Store/actions";

class CheckboxFilters extends Component {
    render() {
        const { checkbox, setFilter } = this.props;

        return (
            <>
                <h4>{checkbox.name}</h4>
                <CheckboxesContainer>
                    {checkbox.items.map((item) => {
                        const checkboxName = (
                            checkbox.name + item.displayValue
                        ).replace(/ /g, "");
                        return (
                            <div key={checkboxName}>
                                <input
                                    type="checkbox"
                                    id={checkboxName}
                                    onClick={() =>
                                        setFilter(
                                            null,
                                            checkbox.name,
                                            item.displayValue
                                        )
                                    }
                                />
                                <label htmlFor={checkboxName}>
                                    {item.displayValue}
                                </label>
                            </div>
                        );
                    })}
                </CheckboxesContainer>
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (e, name, color) => dispatch(setFilter(e, name, color)),
    };
};

export default connect(null, mapDispatchToProps)(CheckboxFilters);
