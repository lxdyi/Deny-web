// src/contexts/AppContext.jsx

import { createContext, useState, useEffect } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
    } else {
      const newUserId = generateUniqueId();
      localStorage.setItem("userId", newUserId);
      setUserId(newUserId);
    }
  }, []);

  const generateUniqueId = () => {
    const randomNumbers = Math.floor(100000 + Math.random() * 900000); // Generates a random 6-digit number
    return `user${randomNumbers}`;
  };

  return (
    <AppContext.Provider
      value={{
        userId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
