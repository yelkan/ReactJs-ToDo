import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
    const [user, setUser] = useState(getInitialUser());
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isLoginPending, setLoginPending] = useState(false);
    const [loginError, setLoginError] = useState(null);

    function getInitialUser() {
        const temp = localStorage.getItem("user");
        const loadedUser = JSON.parse(temp);
        return loadedUser || {};
    }

    useEffect(() => {
        if (user
            && Object.keys(user).length === 0
            && Object.getPrototypeOf(user) === Object.prototype) {
            setLoggedIn(false);
            localStorage.removeItem("user");
        } else {
            const temp = JSON.stringify(user);
            localStorage.setItem("user", temp);
            setLoggedIn(true);
        }
    }, [user])

    const login = (username, password) => {
        setLoggedIn(false);
        setLoginPending(true);
        setLoginError(null);

        fetchLogin(username, password, error => {
            setLoginPending(false);

            if (!error) {
                setLoggedIn(true);
                setUser({
                    ...user, username, password, token: "X_TOKEN_" + username
                });
            }
            else {
                setLoginError(error);
            }
        })
    }

    const logout = () => {
        setLoggedIn(false);
        setLoginPending(false);
        setLoginError(null);
        setUser({});
    }

    const value = {
        user: {
            username: isLoggedIn && user.username,
            token: isLoggedIn && user.token
        },
        state: {
            isLoggedIn,
            isLoginPending,
            loginError
        },
        functions: {
            login,
            logout
        }
    }

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }



const fetchLogin = (username, password, callback) => setTimeout(() => {
    if (username === "admin" && password === "admin") {
        return callback(null)
    } else {
        return callback(new Error('Invalid email and password'));
    }
}, 1000)