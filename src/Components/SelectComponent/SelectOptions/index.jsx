import React, { Component } from "react";
import Select from "react-select";
import { getCurrency } from "../../Store/actions";

import { connect } from "react-redux";
class SelectOptions extends Component {
    constructor(props) {
        super(props);
        this.onChangeCurrency = this.onChangeCurrency.bind(this);
    }

    onChangeCurrency(value) {
        this.props.change(value);
        this.props.getCurrency(value.label);
    }

    render() {
        const { value, color, style, option, options, defaultOptions } =
            this.props;
        return (
            <>
                <Select
                    isSearchable={false}
                    value={value}
                    onChange={this.onChangeCurrency}
                    colors={color}
                    styles={style}
                    defaultValue={defaultOptions}
                    formatOptionLabel={option}
                    options={options}
                />
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrency: (i) => dispatch(getCurrency(i)),
    };
};

export default connect(null, mapDispatchToProps)(SelectOptions);
