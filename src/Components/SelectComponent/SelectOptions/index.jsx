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
        return (
            <>
                <Select
                    value={this.props.value}
                    onChange={this.onChangeCurrency}
                    colors={this.props.color}
                    styles={this.props.style}
                    defaultValue={this.props.default}
                    formatOptionLabel={this.props.option}
                    options={this.props.options}
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
