// AuthContext.tsx
import React, { createContext, useContext } from "react";
import { AuthStageType } from "types/AuthType";
type User = {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
};
type AuthContextType = {
  isLoggedIn: boolean;
  user: User | null;
  loginAuth: (token: string, userInfo: User) => void;
  logoutAuth: () => void;
  authStage: AuthStageType;
  setAuthStage: (stage: AuthStageType) => void;
};

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  loginAuth: (token: string, userInfo: User) => {}, // Provide default implementation
  logoutAuth: () => {},
  authStage: "LOGIN",
  setAuthStage: () => {},
});

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
