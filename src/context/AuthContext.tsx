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
  login: (token: string, userInfo: User) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: (token: string, userInfo: User) => {}, // Provide default implementation
  logout: () => {},
});

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
