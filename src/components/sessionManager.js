SESSION_KEY = 'user_session';


const setSession = (userData) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(userData));
};

const getSession = () => {
  const sessionData = localStorage.getItem(SESSION_KEY);
  return sessionData ? JSON.parse(sessionData) : null;
};


const clearSession = () => {
  localStorage.removeItem(SESSION_KEY);
};

export { setSession, getSession, clearSession };
