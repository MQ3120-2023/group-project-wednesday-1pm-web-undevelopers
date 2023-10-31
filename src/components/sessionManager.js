// Key used to store user session data in local storage
const SESSION_KEY = "user_session";

// Attempting to reassign a constant value, which is not allowed in JavaScript
// SESSION_KEY = 'user_session';

// Function to set user session data in local storage
const setSession = (userData) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
};

// Function to retrieve user session data from local storage
const getSession = () => {
  const sessionData = localStorage.getItem(SESSION_KEY);
  // If session data exists, parse and return it; otherwise, return null
  return sessionData ? JSON.parse(sessionData) : null;
};

// Function to clear user session data from local storage
const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

// Exporting the functions for external use
export { setSession, getSession, clearSession };
