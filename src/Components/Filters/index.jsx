import React, { Component } from "react";
import {FiltersContainer, SelectContainer, CheckboxesContainer, ColorsContainer} from "./style"

class Filters extends Component {

    render() {
        const { productsAttributes } = this.props;
        return (
            <FiltersContainer>
                {console.log(productsAttributes)}
                <div>
                <h3>FILTER BY</h3>
                
                <h4>Categories</h4>
                <SelectContainer>
                    <option>test</option>
                    <option>test</option>
                    <option>test</option>
                    <option>test</option>
                </SelectContainer>
                
                <h4>CHECKBOX</h4>
                <CheckboxesContainer>
                    <input type="checkbox" />
                    <input type="checkbox" />
                </CheckboxesContainer>

                <h4>COLOR</h4>
                <ColorsContainer>
                    <li></li>
                    <li></li>
                    <li></li>
                </ColorsContainer>
                
                {/* {filter.color ? (
                    <>
                    <h4>{filter.color}</h4>
                    <ColorContainer>
                        {availablefilter.color.map((color, index) => (
                            <li
                                key={`${color}${index}`}
                                onClick={() => functionFilter(color)}
                            ></li>
                        ))}
                    </ColorContainer>
                </>
            ) : (
                ""
                )}

            {filter.select ? (
                <>
                    <h4>{filter.select}</h4>
                    <ul>
                    {availablefilter.select.map((select, index) => (
                        <li
                        key={`${select}${index}`}
                                onClick={() => functionFilter(select)}
                                >
                                {select}
                                </li>
                                ))}
                    </ul>
                    </>
            ) : (
                ""
                )} */
                
                /* filter.checkbox ? (
                    <>
                    <h4>{filter.checkbox}</h4>
                    <ul>
                    {availablefilter.checkbox.map((checkbox, index) => (
                            <li
                            key={`${checkbox}${index}`}
                                onClick={() => functionFilter(checkbox)}
                                >
                                {checkbox}
                            </li>
                        ))}
                        </ul>
                        </>
                        ) : (
                            ""
                        )} */}
                </div>
            </FiltersContainer>
        );
    }
}

export default Filters;
