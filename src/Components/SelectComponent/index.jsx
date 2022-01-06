import React, { Component } from "react";
import Select from "react-select";
import customSelect from "../../Styles/CustomSelect";
import { graphql } from "react-apollo";
import { LOAD_CURRENCIES } from "../GraphQL/Queries";

class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "",
            value: {},
            options: [],
        };
        this.onChange = this.onChange.bind(this);
    }

    rerender() {
        const arr = [];
        for (let i = 0; i < this.props.data.currencies.length; i++) {
            arr.push({
                value: this.props.data.currencies[i].label,
                label: this.props.data.currencies[i].label,
                symbol: this.props.data.currencies[i].symbol,
            });
        }
        this.setState({
            value: {
                value: this.props.data.currencies[0].label,
                label: this.props.data.currencies[0].label,
                symbol: this.props.data.currencies[0].symbol,
            },
            select: this.props.data.currencies[0].label,
            options: [...arr],
        });
    }

    componentDidMount() {
        setTimeout(this.rerender.bind(this), 150);
    }

    onChange(value) {
        this.setState({
            select: value.value,
            value: value,
        });
    }

    formatOptionLabel = ({ value, label, symbol }) => (
        <div>
            <div>{label}</div>
            <div>{symbol}</div>
        </div>
    );

    render() {
        return (
            <>
                <Select
                    value={{
                        value: this.state.value.value,
                        label: "",
                        symbol: this.state.value.symbol,
                    }}
                    onChange={this.onChange}
                    colors={this.props.theme.theme}
                    styles={customSelect}
                    defaultValue={this.state.options[0]}
                    formatOptionLabel={this.formatOptionLabel}
                    options={this.state.options}
                />
            </>
        );
    }
}

export default graphql(LOAD_CURRENCIES)(SelectComponent);
