import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

// Signup component
function Signup({ onAuth }) {
  // State for email and password for registration
  const [RegEmail, setRegEmail] = useState("");
  const [RegPassword, setRegPassword] = useState("");

  // Function to handle user registration
  const register = () => {
    // Use Firebase Authentication to create a new user with email and password
    createUserWithEmailAndPassword(auth, RegEmail, RegPassword)
      .then(() => {
        resetInput();
        onAuth(); // Callback function to handle authentication state in the parent component
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // Function to reset input fields
  const resetInput = () => {
    setRegEmail("");
    setRegPassword("");
  };

  // Render the Signup component
  return (
    <div className="form-container sign-up-container">
      <div className="form">
        <h1>Create Account</h1>
        <div className="registerInput">
          {/* Email input */}
          <input
            type="email"
            value={RegEmail}
            onChange={(e) => setRegEmail(e.target.value)}
            placeholder="Email"
          />
          {/* Password input */}
          <input
            type="password"
            value={RegPassword}
            onChange={(e) => setRegPassword(e.target.value)}
            placeholder="Password"
          />
          {/* Sign Up button */}
          <button className="signup-btn" onClick={register}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
