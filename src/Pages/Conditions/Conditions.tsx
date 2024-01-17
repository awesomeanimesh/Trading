import React, { useState } from "react";
import "./Conditions.css";
import { useNavigate } from "react-router-dom";
const Conditions: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState({
    symbol: "",
    action: "Buy", // Default value for action
    optionType: "CE", // Default value for option type
    expiry: "",
    strike: "",
    quantity: 0,
    entryPrice: 0,
    slPrice: 0,
  });

  // Sample data for dropdowns
  const expiryOptions = ["2024-01-31", "2024-02-29", "2024-03-31"];
  const strikeOptions = ["100", "110", "120"];

  // State for form submission status
  const [submitted, setSubmitted] = useState(false);

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((value) => value !== "");

    if (isFormValid) {
      // Perform any additional actions (e.g., API call, redirect) here
      setSubmitted(true);
    } else {
      alert("All fields are compulsory. Please fill in all the details.");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="form-container">
      {submitted ? (
        <div>
          <p>This is the redirect page after Login to 5Paisa.</p>
        </div>
      ) : (
        <>
          <div className="conditionsTitle">
            <div>Login Successful</div>
            <div>
              <button
                onClick={() => {
                  navigate("/strategies");
                }}
              >
                view Strategies
              </button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="form-label">
              Select Symbol:
              <div className="radio-group">
                <input
                  type="radio"
                  name="symbol"
                  value="Nifty"
                  onChange={() => setFormData({ ...formData, symbol: "Nifty" })}
                />
                Nifty
                <input
                  type="radio"
                  name="symbol"
                  value="BankNifty"
                  onChange={() =>
                    setFormData({ ...formData, symbol: "BankNifty" })
                  }
                />
                BankNifty
                <input
                  type="radio"
                  name="symbol"
                  value="Finnity"
                  onChange={() =>
                    setFormData({ ...formData, symbol: "Finnity" })
                  }
                />
                FinNifty
              </div>
            </label>

            <label className="form-label">
              Select Action:
              <select
                className="form-select"
                value={formData.action}
                onChange={(e) =>
                  setFormData({ ...formData, action: e.target.value })
                }
              >
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>
            </label>

            <label className="form-label">
              Option Type:
              <select
                className="form-select"
                value={formData.optionType}
                onChange={(e) =>
                  setFormData({ ...formData, optionType: e.target.value })
                }
              >
                <option value="CE">CE</option>
                <option value="PE">PE</option>
              </select>
            </label>

            <label className="form-label">
              Expiry:
              <select
                className="form-select"
                value={formData.expiry}
                onChange={(e) =>
                  setFormData({ ...formData, expiry: e.target.value })
                }
              >
                {expiryOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-label">
              Select Strike:
              <select
                className="form-select"
                value={formData.strike}
                onChange={(e) =>
                  setFormData({ ...formData, strike: e.target.value })
                }
              >
                {strikeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-label">
              Quantity:
              <input
                className="form-input"
                type="number"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: +e.target.value })
                }
              />
            </label>

            <label className="form-label">
              Entry Price:
              <input
                className="form-input"
                type="number"
                step="0.01"
                value={formData.entryPrice}
                onChange={(e) =>
                  setFormData({ ...formData, entryPrice: +e.target.value })
                }
              />
            </label>

            <label className="form-label">
              SL Price:
              <input
                className="form-input"
                type="number"
                step="0.01"
                value={formData.slPrice}
                onChange={(e) =>
                  setFormData({ ...formData, slPrice: +e.target.value })
                }
              />
            </label>

            <button className="form-submit" type="submit">
              Start Algo
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Conditions;
