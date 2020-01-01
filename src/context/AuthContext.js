import React, { createContext, useContext, Component, useState } from 'react'

import { userLogin, isLoggedIn, userLogout } from '../services/api/users';


const AuthContext = createContext();

function useAuthData() {
    console.log("USE AUTH DATA", useContext(AuthContext))
    return useContext(AuthContext);
}

function AuthProvider({ children }) {
    const [authData, setAuthData] = useState(
        {
            user: {},
            isAuthenticated: false
        }
    );
    const [checkUser, setCheckUser] = useState(false)

    const isLogged = async function () {
        const data = await isLoggedIn();

        if (data.status === 200) {
            setAuthData({ user: data.data.user, isAuthenticated: true });
            return;
        } else {
            setAuthData({ user: {}, isAuthenticated: false })
        }
    }

    React.useEffect(() => {
        isLogged()
    }, [])

    // if(!isAuthenticated) {
    //     isLogged()
    // } else {

    // }

    const authProps = {
        authData,
        async login(username, password) {
            const data = await userLogin(username, password);

            if (data.status === 200) {
                console.log("SDSDSDS", data.data.data.user)
                // setAuthData({ isAuthenticated: true })
                setAuthData({ user: data.data.data.user, isAuthenticated: true });
            } else {
                setAuthData({ user: {}, isAuthenticated: false })
            }
            console.log("AuthProv", data)
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