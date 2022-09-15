import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return <button style={{  width: "40px", height: "40px" }} onClick={toggleTheme}>{theme === 'dark' ? <span>🌞</span> : <span>🌙</span>}</button>
}

export default ThemeSwitcher;