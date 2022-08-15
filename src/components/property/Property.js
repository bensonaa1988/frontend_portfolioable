import React from "react";
import PropTypes from "prop-types";
import "./Property.css";

const Property = ({ propertyId, name, address, city, state, bedrooms, baths, rating, monthlypayment}) => {
    // const handleOnDelete = () => {
    //     onDeleteProperty(propertyId);
    // };


    return (
        <div className="border-property">
        {/* <p className="delete"
        onClick={handleOnDelete}
        // src={require(".../images/x-icon.png")}
        /> */}
        <div className="name">
            <p> name: {name}</p>
        </div>

        <div className="address">
            <p> address: {address}</p>
        </div>    
        <div className="city">
            <p> city: {city}</p>
        </div>  
        
        <div className="state">
            <p> state: {state}</p>
        </div>   
        <div className="bedrooms">
            <p> bedrooms: {bedrooms}</p>
        </div>   

        <div className="baths">
            <p>baths: {baths}</p>
        </div>   

        <div className="rating">
            <p> rating: {rating}</p>
        </div>
        <div className="monthlypayment">
            <p>monthly payment: {monthlypayment}</p>
        </div>       
        </div>
        
    );
};

Property.propTypes = {
    propertyId: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    monthlypayment: PropTypes.number.isRequired,
    // onDeleteProperty: PropTypes.func.isRequired,
};

export default Property;
