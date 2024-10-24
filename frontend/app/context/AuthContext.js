// context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = (credentials) => {
        console.log('Logging in with:', credentials);
        // Aquí podrías añadir la lógica para verificar las credenciales
        setIsAuthenticated(true);
    };

    const logout = () => {
        console.log('Logging out');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
