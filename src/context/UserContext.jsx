/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const [favorites, setFavorites] = useState([]);

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, logout, favorites, toggleFavorite }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
