import React, { Component } from "react";
import SelectFilters from "./SelectFilter";
import ColorFilter from "./ColorFilter";
import CheckboxFilter from "./CheckboxFilter";
import { FiltersContainer } from "./style";

class Filters extends Component {
    render() {
        const {
            selectAttributes,
            checkboxAttributes,
            colorAttributes,
            selectQty,
            activeFilter,
        } = this.props;

        return (
            <FiltersContainer>
                <div>
                    <h3>FILTER BY</h3>

                    {selectQty?.map((name) => {
                        const active =
                            activeFilter.name === name ||
                            !activeFilter.filterOn;
                        return (
                            <SelectFilters
                                selectAttributes={selectAttributes}
                                name={name}
                                key={name}
                                active={active}
                            />
                        );
                    })}

                    {colorAttributes.name ? (
                        <ColorFilter
                            filter={
                                colorAttributes.name === activeFilter.name
                                    ? activeFilter
                                    : {}
                            }
                            active={
                                colorAttributes.name === activeFilter.name ||
                                !activeFilter.filterOn
                                    ? true
                                    : false
                            }
                            colorAttributes={colorAttributes}
                        />
                    ) : (
                        <></>
                    )}

                    {checkboxAttributes?.map((checkbox) => {
                        const active =
                            activeFilter.name === checkbox.name ||
                            !activeFilter.filterOn;
                        console.log(activeFilter);
                        return (
                            <CheckboxFilter
                                filter={
                                    activeFilter.name === checkbox.name
                                        ? activeFilter
                                        : {}
                                }
                                key={checkbox.name}
                                checkbox={checkbox}
                                active={active}
                            />
                        );
                    })}
                </div>
            </FiltersContainer>
        );
    }
}

export default Filters;
