// ThemeSwitcher.jsx
import { useContext } from "react";
import { ThemeContext } from "../practice/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === "light" ? "white" : "black",
    color: theme === "light" ? "black" : "white",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  };

  return (
    <div style={style}>
      <h1>{theme === "light" ? "☀️ Light Mode" : "🌙 Dark Mode"}</h1>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}

export default ThemeSwitcher;
