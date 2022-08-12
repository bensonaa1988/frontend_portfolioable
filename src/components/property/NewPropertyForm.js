import React, {useState} from "react";
import PropTypes from "prop-types";
import "../forms.css";

const kDefaultFormState = {
    notes: "",
};

const NewPropertyForm = ({ onPropertySubmit, onToggleVisible }) => {
    const [propertyData, setpropertyData] = useState(kDefaultFormState);
    const [isPropertyValid, setPropertyValid] = useState(false);

    const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    const newFormData = { ...propertyData, [fieldName]: fieldValue };

    setpropertyData(newFormData);
    setPropertyValid(fieldValue ? fieldValue.length <= 100 : false);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      onPropertySubmit(propertyData);
      setpropertyData(kDefaultFormState);
      setPropertyValid(false);
      onToggleVisible();
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={propertyData.name}
              onChange={handleChange}
              className={
                isPropertyValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">Address:</label>
            <input
              type="text"
              name="address"
              value={propertyData.address}
              onChange={handleChange}
              className={
                isPropertyValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">City:</label>
            <input
              type="text"
              name="city"
              value={propertyData.city}
              onChange={handleChange}
              className={
                isPropertyValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">State:</label>
            <input
              type="text"
              name="state"
              value={propertyData.state}
              onChange={handleChange}
              className={
                isPropertyValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">Bedrooms:</label>
            <input
              type="text"
              name="bedrooms"
              value={propertyData.bedrooms}
              onChange={handleChange}
              className={
                isPropertyValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          
          <div>
            <label className="form-label">Baths:</label>
            <input
              type="text"
              name="baths"
              value={propertyData.baths}
              onChange={handleChange}
              className={
                isPropertyValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">Rating:</label>
            <input
              type="text"
              name="rating"
              value={propertyData.rating}
              onChange={handleChange}
              className={
                isPropertyValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">Monthly Payment:</label>
            <input
              type="text"
              name="monthlypayment"
              value={propertyData.monthlypayment}
              onChange={handleChange}
              className={
                isPropertyValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
            </div>
  
          <div>
            <input
              type="submit"
              value="add property"
              disabled={!isPropertyValid}
              className="submit-button"
            ></input>
          </div>
        </form>
      </div>
    );
  };
  
NewPropertyForm.propTypes = {
    onPropertySubmit: PropTypes.func.isRequired,
    onToggleVisible: PropTypes.func.isRequired,
    };

export default NewPropertyForm;


// key={property.propertyId}
// propertyId={property.propertyId}
// name={property.name}
// address={property.address} 
// city={property.city} 
// state={property.city} 
// bedrooms={property.bedrooms} 
// baths={property.baths} 
// rating={property.rat