// ThemeContext.jsx
import { createContext, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export const ThemeContext = createContext();

export function ThemeProvider() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeSwitcher/>
    </ThemeContext.Provider>
  );
}
