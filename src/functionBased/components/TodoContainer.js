import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom"
import About from "../../pages/About";
import NotMatch from "../../pages/NotMatch";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import Login from "../../pages/Login";
import Home from "../../pages/Home";
import Layout from "../layouts/Layout";

const TodoContainer = () => {
    const { state: { isLoggedIn } } = useContext(AuthContext);
    const { theme } = useContext(ThemeContext);

    return (
        <main className={theme === "dark" ? "dark-theme" : ""}>
            {isLoggedIn ? (
                <Layout>
                    <Switch>
                        <Route exact path="/">
                           <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="*">
                            <NotMatch />
                        </Route>
                    </Switch>
                </Layout>
            ) : (
                <Switch>
                    <Route path="*">
                        <Login />
                    </Route>
                </Switch>
            )}

        </main>
    )
}

export default TodoContainer;