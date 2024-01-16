import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Add your authentication logic here
    // For simplicity, let's just check if both fields are non-empty
    if (username.trim() === "" || password.trim() === "") {
      setErrorMessage("Please enter both username and password.");
    } else {
      setErrorMessage("");
      // Add your authentication logic (e.g., API call, authentication service) here
      // If authentication is successful, you can navigate to the next page
      navigate("/home");
      console.log("Authentication successful");
    }
  };

  return (
    <div className="parent">
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
