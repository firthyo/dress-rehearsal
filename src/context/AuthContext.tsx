// AuthContext.tsx
import React, { createContext, useContext } from "react";
interface User {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}
interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  loginAuth: (token: string, userInfo: User) => void;
  logoutAuth: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  loginAuth: (token: string, userInfo: User) => {}, // Provide default implementation
  logoutAuth: () => {},
});

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
