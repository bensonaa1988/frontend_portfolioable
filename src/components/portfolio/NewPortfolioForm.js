import { React, useState } from "react";
import PropTypes from "prop-types";
import "../forms.css" ;

const kDefaultFormState = {
    name: "",
    notes: "",
};

const NewPortfolioForm = ({onPortfolioSubmit, onToggleVisible}) => {
    const [formData, setFormData] = useState(kDefaultFormState);
    const [isFormValid, setFormValid] = useState({name: false, notes: false});

    const handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;

        const newFormData = {...formData, [fieldName]: fieldValue };

        setFormData(newFormData);

        let validForm;
    if (fieldName === "name") {
    validForm = {
    ...isFormValid,
    title: fieldValue ? fieldValue.length <= 40 : false,
    };
} else if (fieldName === "notes") {
    validForm = {
    ...isFormValid,
    owner: fieldValue ? fieldValue.length <= 2000 : false,
    };
    }

        setFormValid(validForm);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onPortfolioSubmit(formData);
        setFormData(kDefaultFormState);
        setFormData({name: false, notes: false});
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
        value={formData.name}
        onChange={handleChange}
        className={
            isFormValid.title ? "input--state-success" : "input--state-danger"
        }
        ></input>
    </div>
    <div>
        <label className="form-label">Notes:</label>
        <input
        type="text"
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        className={
            isFormValid.owner ? "input--state-success" : "input--state-danger"
        }
        ></input>
    </div>
    <div>
        <input
        type="submit"
        value="add portfolio"
        disabled={!(isFormValid.title && isFormValid.owner)}
        className="submit-button"
        ></input>
    </div>
    </form>
</div>
);
};

NewPortfolioForm.propTypes = {
onPortfolioSubmit: PropTypes.func.isRequired,
onToggleVisible: PropTypes.func.isRequired,
};

export default NewPortfolioForm;

