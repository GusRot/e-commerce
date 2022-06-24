import React, { Component } from "react";
import { CheckboxesContainer } from "./style";

class CheckboxFilters extends Component {
    render() {
        const { checkbox } = this.props;

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
                                    onClick={() => console.log("ok")}
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

export default CheckboxFilters;
