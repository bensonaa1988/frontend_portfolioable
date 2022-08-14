import React, {useState} from "react";
import PropTypes from "prop-types";
import "../forms.css";

const kDefaultFormState = {
    name: '',
    address: '',
    city: '',
    state: '',
    bedrooms: '',
    baths: '',
    rating: '',
    monthlypayment: ''
};

const NewPropertyForm = ({ onPropertySubmit, onToggleVisible, portfolioId }) => {
    const [formData, setFormData] = useState(kDefaultFormState);
    const [isFormValid, setFormValid] = useState(false);

    const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    console.log(portfolioId);

    const newFormData = { ...formData, [fieldName]: fieldValue };

      setFormData(newFormData);
      setFormValid(fieldValue ? fieldValue.length <= 100: false);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      onPropertySubmit(formData);
      setFormData(kDefaultFormState);
      setFormValid(false);
      onToggleVisible();
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="form-label">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={
                isFormValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={
                isFormValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={
                isFormValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className={
                isFormValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">Bedrooms:</label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              className={
                isFormValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          
          <div>
            <label className="form-label">Baths:</label>
            <input
              type="text"
              name="baths"
              value={formData.baths}
              onChange={handleChange}
              className={
                isFormValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">Rating:</label>
            <input
              type="text"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              className={
                isFormValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
          </div>
          <div>
            <label className="form-label">Monthly Payment:</label>
            <input
              type="text"
              name="monthlypayment"
              value={formData.monthlypayment}
              onChange={handleChange}
              className={
                isFormValid ? "input--state-success" : "input--state-danger"
              }
            ></input>
            </div>
  
          <div>
            <input
              type="submit"
              value="add property"
              disabled={!isFormValid}
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