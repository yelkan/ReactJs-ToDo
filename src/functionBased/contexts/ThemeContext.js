import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const { children } = props;

    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }

    const value = {
        theme,
        toggleTheme
    }

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export { ThemeContext, ThemeProvider }