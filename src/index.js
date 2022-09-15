import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom";
import TodoContainer from "./functionBased/components/TodoContainer"

//stylesheet
import "./functionBased/App.css"
import { ThemeProvider } from "./functionBased/contexts/ThemeContext";
import { AuthProvider } from "./functionBased/contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ThemeProvider>
            <AuthProvider>
                <Router>
                    <TodoContainer />
                </Router>
            </AuthProvider>
        </ThemeProvider>
    </React.StrictMode>
);

