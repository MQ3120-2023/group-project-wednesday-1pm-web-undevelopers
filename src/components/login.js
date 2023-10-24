import React, { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      // Simulate authentication logic
      if (username === "user" && password === "password") {
        console.log("Login successful");
        setError("");
        setLoggedIn(true);
      } else {
        setError("Invalid username or password");
      }
    };
  
    // If user is logged in, do not render the login form
    if (isLoggedIn) {
      return (
        <div>
          <h1>Welcome, {username}!</h1>
        </div>
      );
    }
  
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
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    );
  };
  
  export default Login;