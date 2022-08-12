import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import Collapsible from "react-collapsible";

const Calculator = ({ calcId, purchasePrice, downPayment, mortgageTerms, interestRate, propertyTax, propertyInsurance, PMI, firstPaymentDate, amortization, onClickCalcBtn }) => {
const handleonClickCalcBtn = () => {
onClickCalcBtn(calcId);
};



return (
        <Collapsible trigger="Calculator">
        <div className="calc-container">
        <img
        className="collapse"
        onClick={handleonClickCalcBtn}
        // src={require("../images/x-icon.png")}
        alt="calculator"
        />
        <div className="purchasePrice">
                <p>{purchasePrice}</p>
        </div>

        <div className="downPayment">
                <p>{downPayment}</p>
        </div>

        <div className="mortgageTerms">
                <p>{mortgageTerms}</p>
        </div>

        <div className="interestRate">
                <p>{interestRate}</p>
        </div>
        <div className="propertyTax">
                <p>{propertyTax}</p>
        </div>
        <div className="propertyInsurance">
                <p>{propertyInsurance}</p>
        </div>
        <div className="PMI">
                <p>{PMI}</p>
        </div>
        <div className="firstPaymentDate">
                <p>{firstPaymentDate}</p>
        </div>
        <div className="amortization">
                <p>{amortization}</p>
        </div>
        </div>
        </Collapsible>
);
};

Calculator.propTypes = {
calculatorId: PropTypes.number.isRequired,
purchasePrice: PropTypes.number.isRequired,
downPayment: PropTypes.number.isRequired,
mortgageTerms: PropTypes.number.isRequired,
interestRate: PropTypes.number.isRequired,
propertyTax: PropTypes.number.isRequired,
propertyInsurance: PropTypes.number.isRequired,
PMI: PropTypes.number.isRequired,
firstPaymentDate: PropTypes.number.isRequired,
amortization: PropTypes.string.isRequired,
onClickCalcBtn: PropTypes.func.isRequired,
};

export default Calculator;
