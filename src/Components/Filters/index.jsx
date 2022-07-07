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

        let colorFilterActive = false;
        if (activeFilter.filterOn) {
            Object.keys(activeFilter.filters).forEach(function (key) {
                if (key === colorAttributes.name) {
                    colorFilterActive = true;
                }
            });
        }

        return (
            <FiltersContainer>
                <div>
                    <h3>FILTER BY</h3>

                    {selectQty?.map((name) => {
                        let active = false;

                        if (activeFilter.filterOn) {
                            Object.keys(activeFilter.filters).forEach(function (
                                key
                            ) {
                                if (key === name) {
                                    active = true;
                                }
                            });
                        }

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
                            active={colorFilterActive}
                            colorAttributes={colorAttributes}
                        />
                    ) : (
                        <></>
                    )}

                    {checkboxAttributes?.map((checkbox) => {
                        let active = false;
                        if (activeFilter.filterOn) {
                            Object.keys(activeFilter.filters).forEach(function (
                                key
                            ) {
                                if (key === checkbox.name) {
                                    active = true;
                                }
                            });
                        }

                        return (
                            <CheckboxFilter
                                filter={active ? activeFilter : {}}
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
