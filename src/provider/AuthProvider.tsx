import React, { useState, ReactNode, useEffect } from "react";
import { AuthContext } from "context/AuthContext";
import { AuthStageType } from "types/AuthType";

type AuthProviderProps = {
  children: ReactNode;
};

type User = {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [authStage, setAuthStage] = useState<AuthStageType>("SIGNUP");
  console.log("This is user", user);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const userInfo = localStorage.getItem("userInfo");
    if (token && userInfo) {
      setUser(JSON.parse(userInfo));
      setIsLoggedIn(true);
    }
  }, []);

  const loginAuth = (token: string, userInfo: User) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setUser(userInfo);
    setIsLoggedIn(true);
  };

  const logoutAuth = () => {
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
        loginAuth,
        logoutAuth,
        authStage,
        setAuthStage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
