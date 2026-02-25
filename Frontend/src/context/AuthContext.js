import React, { createContext, useState } from "react";
import AuthService from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(AuthService.getCurrentUser());

    const login = async (data) => {
    const res = await AuthService.login(data);
    setUser(res);
  };

  const register = async (data) => {
    return await AuthService.register(data);
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );

};