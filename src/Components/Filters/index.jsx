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
        const colorFilterActive = colorAttributes.name === activeFilter.name;

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
                                filter={active ? activeFilter : {}}
                            />
                        );
                    })}

                    {colorAttributes.name ? (
                        <ColorFilter
                            filter={colorFilterActive ? activeFilter : {}}
                            active={
                                colorFilterActive || !activeFilter.filterOn
                                    ? true
                                    : false
                            }
                            colorAttributes={colorAttributes}
                        />
                    ) : (
                        <></>
                    )}

                    {checkboxAttributes?.map((checkbox) => {
                        const checkboxFilterActive =
                            activeFilter.name === checkbox.name;
                        const active =
                            checkboxFilterActive || !activeFilter.filterOn;

                        return (
                            <CheckboxFilter
                                filter={
                                    checkboxFilterActive ? activeFilter : {}
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
