import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useSignInWithGoogle } from "../../functions/googleAuth";

// Signin component
function Signin({ onAuth }) {
  // State for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Custom hook for Google Sign-In
  const signInWithGoogle = useSignInWithGoogle();

  // Function to handle login with email and password
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("logged in");
        resetInput();
        onAuth(); // Callback function to handle authentication state in parent component
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  // Function to reset input fields
  const resetInput = () => {
    setEmail("");
    setPassword("");
  };

  // Render the Signin component
  return (
    <div className="form-container sign-in-container">
      <div className="form">
        <h1>Sign in</h1>
        {/* Sign in with Google button */}
        <div className="social-container">
          <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign In With Google
          </button>
        </div>
        <span>or use your account</span>
        {/* Email input */}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {/* Password input */}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {/* Sign In button */}
        <button className="signin-btn" onClick={login}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Signin;
