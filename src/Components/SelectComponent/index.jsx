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
                symbol: <RiMoneyDollarCircleLine />,
            },
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        console.log(value);
        this.setState({
            select: value.value,
            value: value,
        });
    }

    render() {
        return (
            <Select
                value={this.state.value}
                onChange={this.onChange}
                colors={this.props.theme.theme}
                styles={customSelect}
                defaultValue={options[0]}
                formatOptionLabel={formatOptionLabel}
                options={options}
            />
        );
    }
}

const options = [
    { value: "USD", label: "USD", symbol: <RiMoneyDollarCircleLine /> },
    {
        value: "EUR",
        label: "EUR",
        symbol: <RiMoneyEuroCircleLine />,
    },
    { value: "JPY", label: "JPY", symbol: <RiMoneyCnyCircleLine /> },
];

const formatOptionLabel = ({ value, label, symbol }) => (
    <div>
        <div>{label}</div>
        <div>{symbol}</div>
    </div>
);

export default SelectComponent;
