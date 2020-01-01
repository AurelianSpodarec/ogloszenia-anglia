import React, { createContext, useContext, useEffect, useState } from 'react'

import { userLogin, isLoggedIn, userLogout } from '../services/api/users';


const AuthContext = createContext();

function useAuthData() {

    const context = useContext(AuthContext);

    const a = {
        "user": context.authData.user,
        "isAuthenticated": context.isAuthenticated,
        "methods": context
    }
    console.log(a, "sds")
    return a;
}

function AuthProvider({ children }) {
    const [authData, setAuthData] = useState(
        {
            user: {},
            isAuthenticated: false
        }
    );

    const isLogged = async function () {
        const data = await isLoggedIn();

        if (data.status === 200) {
            setAuthData({ user: data.data.user, isAuthenticated: true });
            return;
        } else {
            setAuthData({ user: {}, isAuthenticated: false })
        }
    }

    useEffect(() => {
        isLogged()
    }, [])

    const authProps = {
        authData,
        async login(username, password) {
            const data = await userLogin(username, password);

            if (data.status === 200) {
                setAuthData({ user: data.data.data.user, isAuthenticated: true });
            } else {
                setAuthData({ user: {}, isAuthenticated: false })
            }
        },
        logout() {
            userLogout()
            setAuthData({ user: {}, isAuthenticated: false });
        }
    };

    return (
        <AuthContext.Provider value={authProps}>{children}</AuthContext.Provider>
    );
}

export {
    AuthProvider,
    useAuthData
}