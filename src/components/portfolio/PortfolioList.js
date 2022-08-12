import React from "react";
import PropTypes from "prop-types";
import "./PortfolioList.css";

const PortfolioList = ({portfolios, onPortfolioSelect}) => {
    const handleOnSelect = (event) => {
        onPortfolioSelect(JSON.parse(event.target.value));
    };
    const options = portfolios.map((portfolio) => {
        return (
            <option key={portfolio.portfolioId} value={JSON.stringify(portfolio)}>
                {portfolio.name} - {portfolio.notes}
            </option>

    );
});
    return (
        <div>
            <select 
                className="portfolio-selection-dd"
                onChange={handleOnSelect}
                name="portfolios"
                >
                    <option>Select a Portfolio</option>
                    {options}
                </select>
            </div>
    );   
};

PortfolioList.propTypes = {
    portfolios: PropTypes.arrayOf(
        PropTypes.shape({
            portfolioId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            notes: PropTypes.string.isRequired,
        })
    ).isRequired,
    onPortfolioSelect: PropTypes.func.isRequired,
};

export default PortfolioList
