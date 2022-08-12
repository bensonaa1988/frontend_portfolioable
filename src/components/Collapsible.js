import {React, useState } from 'react';
import "./forms.css";

const Collapsible = () => {
    const [open, setOPen] = useState(false);
    const toggle = () => {
        setOPen(!open);
      };
      
      return (
        <div>
          <button className="Calculator" onClick={toggle}>Calculator</button>
          {open && (
            <div>
              <label className="toggle">Purchase Price:</label>
        <input
        type="text"
        name="Purchase Price"
        ></input>
        <br></br>
         <label className="toggle">Down Payment:</label>
        <input
        type="text"
        name="Down Payment"
        ></input>
            </div>
          )}
        </div>
      );
    };
export default Collapsible;