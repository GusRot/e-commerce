import React, { Component } from "react";
import { SelectContainer, Selects } from "./style";
import { setFilter } from "../../Store/actions";
import { connect } from "react-redux";

class SelectFilters extends Component {
    render() {
        const { name, selectAttributes, setFilter, active, filter } =
            this.props;
        const selectAttributesSet = [...new Set(selectAttributes[name])];
        let filterValue = false;

        if (filter?.filterOn) {
            filterValue = selectAttributesSet.includes(filter.filters[name]);
        }

        return (
            <Selects active={active}>
                <h4>{name}</h4>
                <SelectContainer
                    onChange={(e) => setFilter(e, name, null)}
                    placeholder={`'filter by '${name}`}
                    value={filterValue ? filter.filters[name] : ""}
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
        setFilter: (e, name, x) => dispatch(setFilter(e, name, x)),
    };
};

export default connect(null, mapDispatchToProps)(SelectFilters);
