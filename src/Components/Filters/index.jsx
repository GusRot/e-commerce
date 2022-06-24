import React, { Component } from "react";
import {
    FiltersContainer,
    SelectContainer,
    CheckboxesContainer,
    ColorsContainer,
    ColorsFilter,
} from "./style";

class Filters extends Component {
    render() {
        const {
            selectAttributes,
            checkboxAttributes,
            colorAttributes,
            selectQty,
        } = this.props;

        return (
            <FiltersContainer>
                {console.log(selectAttributes)}
                {console.log(checkboxAttributes)}
                {console.log(colorAttributes)}
                <div>
                    <h3>FILTER BY</h3>

                    {selectQty?.map((name) => (
                        <div key={name}>
                            <h4>{name}</h4>
                            <SelectContainer>
                                {[...new Set(selectAttributes[name])].map(
                                    (item) => (
                                        <option key={item}>{item}</option>
                                    )
                                )}
                            </SelectContainer>
                        </div>
                    ))}

                    {colorAttributes.name ? (
                        <ColorsFilter>
                            <h4>{colorAttributes.name}</h4>
                            <ul>
                                {[
                                    ...new Set(colorAttributes.items?.colors),
                                ].map((color) => (
                                    <ColorsContainer
                                        key={color}
                                        color={color}
                                    ></ColorsContainer>
                                ))}
                            </ul>
                        </ColorsFilter>
                    ) : (
                        <></>
                    )}

                    {checkboxAttributes?.map((checkbox) => (
                        <div key={checkbox.name}>
                            <h4>{checkbox.name}</h4>
                            <CheckboxesContainer>
                                {checkbox.items.map((item) => (
                                    <>
                                        <input
                                            type="checkbox"
                                            id={`${
                                                checkbox.name +
                                                item.displayValue
                                            }`}
                                        />
                                        <label>{item.displayValue}</label>
                                    </>
                                ))}
                            </CheckboxesContainer>
                        </div>
                    ))}
                </div>
            </FiltersContainer>
        );
    }
}

export default Filters;
