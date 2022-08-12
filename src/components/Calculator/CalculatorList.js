import React from "react";
import PropTypes from "prop-types";
import Collapsible from "react-collapsible";
import "./Calculator.css"


const CalculatorList = ({calculators, onCalculatorSelect}) => {
    const handleOnSelect = (event) => {
        onCalculatorSelect(JSON.parse(event.target.value));
    };
    const options = calculators.map((calculator) => {
        return (
            <option key={calculator.calculatorId} value={JSON.stringify(calculator)}>
                {calculator.purchasePrice} - {calculator.downPayment} </option>
        );
});
    return (
        <div>
            <Collapsible trigger={calculators}
                        onChange={handleOnSelect}
                        name="calculators">
                            <p></p>

            </Collapsible>
        </div>
    )