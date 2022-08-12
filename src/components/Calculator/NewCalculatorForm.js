// create calculator state (see new property form)
import { React, useState } from "react";
import PropTypes from "prop-types";
import "./Forms.css";


const kDefaultFormState = {
    purchasePrice: "", 
    downPayment: "", 
    mortgageTerms: "", 
    interestRate: "", 
    propertyTax: "", 
    propertyInsurance: "", 
    PMI: "", 
    firstPaymentDate: "", 
    amortization: "",
};

const NewCalculatorForm = ({onCalculatorSubmit, onToggleVisible}) => {

    const [calculatorData, setCalculatorData] = useState(kDefaultFormState);
    // const [isCalculatorValid, setCalculatorValid] = useState(false);

    const handleChange = (event) => {
    const fieldPurchasePrice = event.target.purchasePrice;
    const fieldDownPayment = event.target.downPayment;
    const fieldMortgageTerms = event.target.mortgageTerms;
    const fieldInterestRate = event.target.interestRate;
    const fieldPropertyTax = event.target.propertyTax;
    const fieldPropertyInsurance = event.target.propertyInsurance;
    const fieldPMI = event.target.PMI;
    const fieldFirstPaymentDate = event.target.firstPaymentDate;
    const fieldAmortization = event.target.amortization;
    
    
    
    const newFormData = { ...calculatorData  };
    
    setCalculatorData(newFormData);
    // setCalculatorValid(fieldValue ? fieldValue.length <= 100 : false);
        };
        

        const handleSubmit = (event) => {
            event.preventDefault();
            onCalculatorSubmit(calculatorData);
            setCalculatorData(kDefaultFormState);
            // setCalculatorValid(false);
            onToggleVisible();
        };    

        // return (
    //         <div>
    //     <form onSubmit={handleSubmit}>
    //         <div>
    //         <label className="form-label">name:</label>
    //         <input
    //             type="text"
    //             name="name"
    //             value={propertyData.name}
    //             onChange={handleChange}
    //             className={
    //             isPropertyValid ? "input--state-success" : "input--state-danger"
    //             }
    //         ></input>
    //         </div>
    //         <div>
    //         <label className="form-label">address:</label>
    //         <input
    //             type="text"
    //             name="address"
    //             value={propertyData.address}
    //             onChange={handleChange}
    //             className={
    //             isPropertyValid ? "input--state-success" : "input--state-danger"
    //             }
    //         ></input>
    //         </div>
    //         <div>
    //         <label className="form-label">city:</label>
    //         <input
    //             type="text"
    //             name="city"
    //             value={propertyData.city}
    //             onChange={handleChange}
    //             className={
    //             isPropertyValid ? "input--state-success" : "input--state-danger"
    //             }
    //         ></input>
    //         </div>
    //         <div>
    //         <label className="form-label">state:</label>
    //         <input
    //             type="text"
    //             name="state"
    //             value={propertyData.state}
    //             onChange={handleChange}
    //             className={
    //             isPropertyValid ? "input--state-success" : "input--state-danger"
    //             }
    //         ></input>
    //         </div>
    //         <div>
    //         <label className="form-label">bedrooms:</label>
    //         <input
    //             type="text"
    //             name="bedrooms"
    //             value={propertyData.bedrooms}
    //             onChange={handleChange}
    //             className={
    //             isPropertyValid ? "input--state-success" : "input--state-danger"
    //             }
    //         ></input>
    //         </div>
            
    //         <div>
    //         <label className="form-label">baths:</label>
    //         <input
    //             type="text"
    //             name="baths"
    //             value={propertyData.baths}
    //             onChange={handleChange}
    //             className={
    //             isPropertyValid ? "input--state-success" : "input--state-danger"
    //             }
    //         ></input>
    //         </div>
    //         <div>
    //         <label className="form-label">rating:</label>
    //         <input
    //             type="text"
    //             name="rating"
    //             value={propertyData.rating}
    //             onChange={handleChange}
    //             className={
    //             isPropertyValid ? "input--state-success" : "input--state-danger"
    //             }
    //         ></input>
    //         </div>
    
    //         <div>
    //         <input
    //             type="submit"
    //             value="add property"
    //             disabled={!isPropertyValid}
    //             className="submit-button"
    //         ></input>
    //         </div>
    //     </form>
    //     </div>
    // );    
};


export default NewCalculatorForm;