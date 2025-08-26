// ToggleTheme.jsx
import { useState } from "react";

function ToggleTheme() {
  const [isDark, setIsDark] = useState(false);

  const pageStyle = {
    backgroundColor: isDark ? "black" : "white",
    color: isDark ? "white" : "black",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"  
  };

  return (
    <div style={pageStyle}>
      <h1>{isDark ? "Dark Mode 🌙" : "Light Mode ☀️"}</h1>
      <button onClick={() => setIsDark(!isDark)}>Toggle Theme</button>
    </div>
  );
}

export default ToggleTheme;
