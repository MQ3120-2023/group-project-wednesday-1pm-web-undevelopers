// Importing React and the AuthProvider from the authentication module
import React from "react";
import { AuthProvider } from "./auth/auth";

// Importing the RecipeList component
import RecipeList from "./RecipeList";

// Home component
const Home = () => {
  return (
    <div className="home-container">
      {/* Wrapping the RecipeList component with the AuthProvider */}
      <AuthProvider>
        <RecipeList />
      </AuthProvider>
    </div>
  );
};

// Exporting the Home component
export default Home;
