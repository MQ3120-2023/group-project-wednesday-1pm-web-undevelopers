import React, { useState, useEffect } from "react";
import { setSession, clearSession, getSession } from "./sessionManager";

// Login component
const Login = () => {
  // State for username, password, error message, and login status
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Effect to check if the user has an existing session
  useEffect(() => {
    const userSession = getSession();
    if (userSession) {
      setUsername(userSession.username);
      setLoggedIn(true);
    }
  }, []);

  // Function to handle login
  const handleLogin = () => {
    // Simulate authentication logic
    if (username === "user" && password === "password") {
      console.log("Login successful");
      setError("");
      setLoggedIn(true);

      // Set user session in local storage
      setSession({ username });
    } else {
      setError("Invalid username or password");
    }
  };

  // Function to handle logout
  const handleLogout = () => {
    // Clear the user's session from local storage and reset the state
    clearSession();
    setUsername("");
    setLoggedIn(false);
  };

  // If the user is logged in, do not render the login form
  if (isLoggedIn) {
    return (
      <div>
        <h1>Welcome, {username}!</h1>
        <button className="login-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }

  // Render the login form if the user is not logged in
  return (
    <div>
      <form>
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
        <button className="login-button" type="button" onClick={handleLogin}>
          Login
        </button>
        {/* Display error message if there is an error */}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

// Exporting the Login component
export default Login;
