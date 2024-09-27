import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const savedUser = localStorage.getItem("user");
  const [user, setUser] = useState(JSON.parse(savedUser) || null);
  const [isMapOpen, setIsMapOpen] = useState(false);
  const loginUser = (user) => {
    setUser(user);
  };

  const handleToggleMap = () => {
    setIsMapOpen(!isMapOpen)
  }


  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loginUser,
        isMapOpen,
        setIsMapOpen,
        handleToggleMap
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContextProvider;
