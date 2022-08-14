import PortfolioList from "./components/portfolio/PortfolioList";
import PropertyList from "./components/property/PropertyList";
import NewPropertyForm from "./components/property/NewPropertyForm";
import NewPortfolioForm from "./components/portfolio/NewPortfolioForm";
import './App.css';
import Collapsible from "./components/Collapsible";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import {Router, BrowserRouter, Link } from "react-router-dom";


const kBaseUrl = "http://127.0.0.1:8000";

const portfolioApiToJson = (portfolio) => {
  const {id: portfolioId, name, notes } = portfolio;
  return {portfolioId, name, notes};
};

const propertyApiToJson = (property) => {
  const {id: propertyId, name, address, city, state, bedrooms, baths, rating, monthlypayment, portfolioId} = property;
  return {propertyId, name, address, city, state, bedrooms, baths, rating, monthlypayment, portfolioId};
};

const getPortfolios = ()  => {
  return axios
    .get(`${kBaseUrl}/portfolios/`)
    .then((response) => {
      return response.data.map(portfolioApiToJson);
    })
    .catch((err) => {
      console.log(err);
      throw new Error(`Error fetching portfolios: ${err}`);
    });
};

const postPortfolio = (newportfolio) => {
  return axios 
    .post(`${kBaseUrl}/portfolios/`, newportfolio)
    .then((response) => {
      return portfolioApiToJson(response.data);
    })
    .catch((err) => {
      console.log(err);
      throw new Error(`Error posting portfolios ${newportfolio}: ${err}`);
    });
};

const getProperties = (portfolioId) => {
  return axios 
    .get(`${kBaseUrl}/portfolios/${portfolioId}/properties/`)
    .then((response) => {
      return response.data.map(propertyApiToJson);
    })
    .catch((err) => {
      console.log(err);
      throw new Error(`Error fetching property: ${err}`);
    });
};

const postProperty = (portfolio, newproperty) => {
  const propertyForApi = {
    ...newproperty,
    bedrooms: parseInt(newproperty.bedrooms),
    baths: parseInt(newproperty.baths),
    rating: parseInt(newproperty.rating),
    monthlypayment: parseInt(newproperty.monthlypayment)
  }
  return axios
    .post(`${kBaseUrl}/portfolios/${portfolio.portfolioId}/properties`, propertyForApi)
    .then ((response) => {
      return propertyApiToJson(response.data);
    })
    .catch((err) => {
      console.log(err);
      throw new Error(`Error posting property ${propertyForApi}: ${err}`);
    });
};

// const patchProperty = (propertyId) => {
//   return axios
//     .patch(`${kBaseUrl}/properties/${propertyId}`)
//     .then((response) => {
//       return propertyApiToJson(response.data.property);
//     })
//     .catch((err) => {
//       console.log(err);
//       throw new Error(`Error updating property ${propertyId}: ${err}`);
//     });
// };

const deleteProperty = (propertyId) => {
  return axios.delete(`${kBaseUrl}/properties/${propertyId}`).catch((err) => {
    console.log(err);
    throw new Error(`Error removing property ${propertyId}: ${err}`);
  });
};

function App() {
  const [portfoliosData, setPortfoliosData] = useState([]);
  const [propertiesData, setPropertiesData] = useState([]);
  const [selectedPortfolio, updateSelectedPortfolio] = useState({
    portfolioId: null,
    name: "",
    notes: ""
  });
  const [isPortfolioFormVisible, updatePortfolioFormVisibility] = useState(false);
  const [isPropertyFormVisible, updatePropertyFormVisibility] = useState(false);

  const updatePortfolioData = () => {
    return getPortfolios()
      .then((portfolios) => {
        setPortfoliosData(portfolios);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    updatePortfolioData();
  }, []);
  
  useEffect(() => {
    if (selectedPortfolio.portfolioId) {
      getProperties(selectedPortfolio.portfolioId)
        .then((properties) => {
          setPropertiesData(properties);
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else {
      setPropertiesData([]);
    }
  }, [selectedPortfolio]);

  const onPortfolioSelect = (portfolio) => {
    updateSelectedPortfolio(portfolio);
  };

  const addPortfolio = (data) => {
    postPortfolio(data)
      .then((portfolio) => {
        setPortfoliosData((oldData) => {
          return [...oldData, portfolio];
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const addProperty = (data) => {
    postProperty(selectedPortfolio, data)
      .then((properties) => {
        setPropertiesData((oldData) => {
          return [...oldData, properties];
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const onDeleteProperty = (propertyId) => {
    deleteProperty(propertyId)
      .then(() => {
        setPropertiesData((oldData) =>
        oldData.filter((properties) => properties.propertyId !== propertyId)
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const togglePortfolioForm = () => {
    updatePortfolioFormVisibility((visible) => !visible);
  };

  const togglePropertyForm = () => {
    updatePropertyFormVisibility((visible) => !visible);
  };

  // console.log(selectedPortfolio.portfolioId)

  
  return (
    <main>
      <nav className="nav">
      </nav>
      <h1>Portfolioable</h1>
      <div className="content-container">
        <div className="selection-container">
          <PortfolioList portfolios={portfoliosData} onPortfolioSelect={onPortfolioSelect} />
          <button className="btn" onClick={togglePortfolioForm}>
            Create New Portfolio
          </button>
    
          <button className="btn" onClick={togglePropertyForm}>
            Add a New Property
          </button>
        </div>
        <div className="forms-container">
          {isPortfolioFormVisible ? (
            <NewPortfolioForm
              onPortfolioSubmit={addPortfolio}
              onToggleVisible={togglePortfolioForm}
            />
          ) : (
            ""
          )}
          {isPropertyFormVisible ? (
            <NewPropertyForm
              onPropertySubmit={addProperty}
              onToggleVisible={togglePropertyForm}
              portfolioId = {selectedPortfolio.portfolioId}
            />
          ) : (
            ""
          )}
        </div>
        <h2>{selectedPortfolio.name}</h2>
        <PropertyList
          properties={propertiesData}
          onDeleteProperty={onDeleteProperty}
        />
      </div>
      <div className="Calculator">
        <Collapsible/>
        <hr/>
      </div>
      <footer>
        <p className="disclaimer">© Team Generational Wealth 2022 All Rights Reserved</p>
      </footer>
      </main>
      
      );
    
}
export default App;


