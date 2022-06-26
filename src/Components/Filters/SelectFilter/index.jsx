import React, { Component } from "react";
import { SelectContainer } from "./style";
import { setFilter } from "../../Store/actions";
import { connect } from "react-redux";

class SelectFilters extends Component {
    render() {
        const { name, selectAttributes, setFilter } = this.props;

        return (
            <>
                <h4>{name}</h4>
                <SelectContainer onChange={(e) => setFilter(e, name, null)}>
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

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (e, name, x) => dispatch(setFilter(e, name, x)),
    };
};

export default connect(null, mapDispatchToProps)(SelectFilters);
