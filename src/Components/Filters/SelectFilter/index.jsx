import React, { Component } from "react";
import { SelectContainer, Selects } from "./style";
import { setFilter } from "../../Store/actions";
import { connect } from "react-redux";

class SelectFilters extends Component {
    render() {
        const { name, selectAttributes, setFilter, active, filter } =
            this.props;
        const selectAttributesSet = [...new Set(selectAttributes[name])];
        const filterValue =
            selectAttributesSet.includes(filter?.value) &&
            name === filter?.name;

        return (
            <Selects active={active}>
                <h4>{name}</h4>
                <SelectContainer
                    onChange={(e) => setFilter(e, name, null, true)}
                    placeholder={`'filter by '${name}`}
                    value={filterValue ? filter.value : ""}
                >
                    <option value="">None</option>
                    {selectAttributesSet.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </SelectContainer>
            </Selects>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (e, name, x, on) => dispatch(setFilter(e, name, x, on)),
    };
};

export default connect(null, mapDispatchToProps)(SelectFilters);
