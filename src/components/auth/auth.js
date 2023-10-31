import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState, createContext } from "react";
import { auth } from "../../firebase";

// Create a context for authentication
export const AuthContext = createContext();

// Authentication provider component
export const AuthProvider = ({ children }) => {
  // State to manage the current user and loading status
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Effect to listen for changes in the authentication state
  useEffect(() => {
    // Use onAuthStateChanged to observe changes in the user's login status
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user); // Set the current user based on the authentication state
      setLoading(false); // Update loading status once the authentication state is determined
    });

    // Cleanup the subscription
    return () => unsubscribe();
  }, []);

  // Render a loading message while waiting for the authentication state
  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <h1>Loading User...</h1>
      </div>
    );
  }

  // Provide the authentication context with the current user value to the wrapped components
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        userId: currentUser?.uid //assign ids to the context
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
