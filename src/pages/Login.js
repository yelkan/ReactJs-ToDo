import React, { useContext, useEffect, useState } from "react"
import InputUser from "../functionBased/components/InputUser"

import { AuthContext } from "../functionBased/contexts/AuthContext"

const Login = (props) => {

    const { state: ContextState, user, functions } = useContext(AuthContext);
    const { isLoggedIn
        , isLoginPending
        , loginError } = ContextState;
    const { login, logout } = functions;

    return (
        <div className="container">
            <InputUser
                title="Login"
            />
            <span style={{ color: "red" }} >{loginError && "error:" + loginError.message}</span>
            <span>{isLoginPending && "Please Wait..."}</span>

            <button onClick={logout} hidden={!isLoggedIn}>Logout</button>
        </div>
    )
}
export default Login


