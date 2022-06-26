import React, { Component } from "react";
import { CheckboxesContainer, CheckboxContainer } from "./style";
import { connect } from "react-redux";
import { setFilter } from "../../Store/actions";

class CheckboxFilters extends Component {
    render() {
        const { checkbox, active, filter, setFilter } = this.props;

        return (
            <CheckboxContainer active={active}>
                <h4>{checkbox.name}</h4>
                <CheckboxesContainer>
                    {console.log(filter)}
                    {checkbox.items.map((item) => {
                        const checkboxName = (
                            checkbox.name + item.displayValue
                        ).replace(/ /g, "");
                        return (
                            <div key={checkboxName}>
                                <input
                                    type="checkbox"
                                    id={checkboxName}
                                    checked={
                                        filter?.value === item.displayValue
                                            ? true
                                            : ""
                                    }
                                    onChange={(e) =>
                                        setFilter(
                                            null,
                                            checkbox.name,
                                            item.displayValue,
                                            true
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
            </CheckboxContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (e, name, color, on) =>
            dispatch(setFilter(e, name, color, on)),
    };
};

export default connect(null, mapDispatchToProps)(CheckboxFilters);
