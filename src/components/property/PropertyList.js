import React from "react";
import PropTypes from "prop-types";
import Property from "./Property";
import "./PropertyList.css";

const PropertyList = ({ properties, onDeleteProperty}) => {
    const propertylist = properties.map((property) => {
        return (
            <Property
                key={property.propertyId}
                propertyId={property.propertyId}
                name={property.name}
                address={property.address} 
                city={property.city} 
                state={property.state} 
                bedrooms={property.bedrooms} 
                baths={property.baths} 
                rating={property.rating}
                monthlypayment={property.monthlypayment}
                />
        );
    });
    return <div className="properties-container">{propertylist}</div>;
};

PropertyList.propTypes = {
    properties: PropTypes.arrayOf(
        PropTypes.shape({
            propertyId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            address: PropTypes.number.isRequired,
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired,
            bedrooms: PropTypes.number.isRequired,
            baths: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
            monthlypayment: PropTypes.number.isRequired,

        })
    ).isRequired,
    onDeleteProperty: PropTypes.func.isRequired
};

export default PropertyList;