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
        } = this.props;

        return (
            <FiltersContainer>
                <div>
                    <h3>FILTER BY</h3>

                    {selectQty?.map((name) => (
                        <SelectFilters
                            selectAttributes={selectAttributes}
                            name={name}
                            key={name}
                        />
                    ))}

                    {colorAttributes.name ? (
                        <ColorFilter colorAttributes={colorAttributes} />
                    ) : (
                        <></>
                    )}

                    {checkboxAttributes?.map((checkbox) => (
                        <CheckboxFilter
                            key={checkbox.name}
                            checkbox={checkbox}
                        />
                    ))}
                </div>
            </FiltersContainer>
        );
    }
}

export default Filters;
