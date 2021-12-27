import React, { Component } from "react";
import { RiMoneyEuroCircleLine } from "@react-icons/all-files/ri/RiMoneyEuroCircleLine";
import { RiMoneyDollarCircleLine } from "@react-icons/all-files/ri/RiMoneyDollarCircleLine";
import { RiMoneyCnyCircleLine } from "@react-icons/all-files/ri/RiMoneyCnyCircleLine";
import Select from "react-select";
import customSelect from "../../Styles/CustomSelect";

class SelectComponent extends Component {
    constructor() {
        super();
        this.state = {
            select: "USD",
            value: {
                value: "USD",
                label: "USD",
                symbol: (
                    <RiMoneyDollarCircleLine
                        style={{
                            height: "1.2rem",
                            width: "1.2rem",
                        }}
                    />
                ),
            },
        };
        this.onChange = this.onChange.bind(this);
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
            <Select
                value={{
                    value: this.state.value.value,
                    label: "",
                    symbol: this.state.value.symbol,
                }}
                onChange={this.onChange}
                colors={this.props.theme.theme}
                styles={customSelect}
                defaultValue={options[0]}
                formatOptionLabel={this.formatOptionLabel}
                options={options}
            >
                {console.log(this.state.value, this.state.select)}
            </Select>
        );
    }
}

const options = [
    {
        value: "USD",
        label: "USD",
        symbol: (
            <RiMoneyDollarCircleLine
                style={{
                    height: "1.2rem",
                    width: "1.2rem",
                }}
            />
        ),
    },
    {
        value: "EUR",
        label: "EUR",
        symbol: (
            <RiMoneyEuroCircleLine
                style={{
                    height: "1.2rem",
                    width: "1.2rem",
                }}
            />
        ),
    },
    {
        value: "JPY",
        label: "JPY",
        symbol: (
            <RiMoneyCnyCircleLine
                style={{
                    height: "1.2rem",
                    width: "1.2rem",
                }}
            />
        ),
    },
];

export default SelectComponent;
