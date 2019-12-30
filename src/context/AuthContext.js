import React, { createContext, useContext, Component, useState } from 'react'

import { userLogin } from '../services/api/users';


const AuthContext = createContext();

function useAuthData() {
    console.log("USE AUTH DATA", useContext(AuthContext))
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const [authData, setAuthData] = useState([{
        user: "Anonymous User",
        isAuthenticated: false
    }]);

    const authProps = {
        authData,
        async login(username, password) {
            const data = await userLogin(username, password);
            console.log("AuthProv", data)
            setAuthData([...authData, data]);
        },
        logout() {
            setAuthData();
        }
    };

    console.log("Auth Data", authData);
    return (
        <AuthContext.Provider value={authProps}>{children}</AuthContext.Provider>
    );
}

export {
    AuthProvider,
    useAuthData
}