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
        const {currencies} = this.props.data;

        for (let i = 0; i < currencies.length; i++) {
            arr.push({
                value: currencies[i].label,
                label: `${currencies[i].label}`,
                symbol: currencies[i].symbol,
            });
        }
        return {
            value: {
                value: currencies[0].label,
                label: `${currencies[0].label}`,
                symbol: currencies[0].symbol,
            },
            select: currencies[0].label,
            options: [...arr],
        };
    }

    firstRender() {
        const {data, theme} = this.props;
        let state = {};

        if (!data.loading) {
            state = { ...this.rerender() };
            const {value, symbol} = this.state;

            return (
                <>
                    <SelectOptions
                        value={{
                            value: value
                                ? value
                                : state.value.value,
                            label: "",
                            symbol: symbol
                                ? symbol
                                : state.value.symbol,
                        }}
                        change={this.onChange}
                        color={theme.theme}
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
