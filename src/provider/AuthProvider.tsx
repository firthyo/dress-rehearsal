import React, { useState, ReactNode, useEffect } from "react";
import { AuthContext } from "context/AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userInfo = localStorage.getItem("userInfo");
    if (token && userInfo) {
      setUser(JSON.parse(userInfo));
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token: string, userInfo: User) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setUser(userInfo);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
