import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    // Add class to HTML for Tailwind dark mode
    useEffect(()=> {
        if(theme == "dark"){
            document.documentElement.classList.add("dark");
        }else{
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};