import React, { Component } from "react";
import { SelectContainer } from "./style";

class SelectFilters extends Component {
    render() {
        const { name, selectAttributes } = this.props;

        return (
            <>
                <h4>{name}</h4>
                <SelectContainer onChange={() => console.log("ok")}>
                    <option value="">Select {name.toLowerCase()} attr</option>
                    {[...new Set(selectAttributes[name])].map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </SelectContainer>
            </>
        );
    }
}

export default SelectFilters;
