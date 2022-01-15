import React, { Component } from "react";
import customSelect from "../../Styles/CustomSelect";
import { graphql } from "react-apollo";
import { LOAD_CURRENCIES } from "../GraphQL/Queries";
import SelectOptions from "./SelectOptions";

class SelectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            symbol: "",
        };
        this.onChange = this.onChange.bind(this);
        this.firstRender = this.firstRender.bind(this);
        this.rerender = this.rerender.bind(this);
    }

    onChange(value) {
        this.setState({
            value: value.value,
            symbol: value.symbol,
        });
    }

    formatOptionLabel = ({ value, label, symbol }) => (
        <div>
            <div>{symbol}</div>
            <div>{label}</div>
        </div>
    );

    rerender() {
        const arr = [];
        for (let i = 0; i < this.props.data.currencies.length; i++) {
            arr.push({
                value: this.props.data.currencies[i].label,
                label: `${this.props.data.currencies[i].label}`,
                symbol: this.props.data.currencies[i].symbol,
            });
        }
        return {
            value: {
                value: this.props.data.currencies[0].label,
                label: `${this.props.data.currencies[0].label}`,
                symbol: this.props.data.currencies[0].symbol,
            },
            select: this.props.data.currencies[0].label,
            options: [...arr],
        };
    }

    firstRender() {
        const data = this.props.data;
        let state = {};

        if (!data.loading) {
            state = { ...this.rerender() };
            return (
                <>
                    <SelectOptions
                        value={{
                            value: this.state.value
                                ? this.state.value
                                : state.value.value,
                            label: "",
                            symbol: this.state.symbol
                                ? this.state.symbol
                                : state.value.symbol,
                        }}
                        change={this.onChange}
                        color={this.props.theme.theme}
                        style={customSelect}
                        defaultOptions={state.options[0]}
                        option={this.formatOptionLabel}
                        options={state.options}
                    />
                </>
            );
        }
    }

    render() {
        return <>{this.firstRender()}</>;
    }
}

export default graphql(LOAD_CURRENCIES)(SelectComponent);
