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
                    {checkbox.items.map((item) => {
                        const checkboxName = (
                            checkbox.name + item.displayValue
                        ).replace(/ /g, "");
                        let checked = false;

                        if (filter?.filterOn) {
                            checked =
                                filter.filters[checkbox.name] ===
                                item.displayValue;
                        }

                        return (
                            <div key={checkboxName}>
                                <input
                                    type="checkbox"
                                    id={checkboxName}
                                    checked={checked}
                                    onChange={(e) =>
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
            </CheckboxContainer>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (e, name, color, on) =>
            dispatch(setFilter(e, name, color)),
    };
};

export default connect(null, mapDispatchToProps)(CheckboxFilters);
