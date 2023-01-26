import React, { useContext } from "react";
import ThemeContext from "../state/ThemeContext";

function About() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: theme.background,
      }}
    >
      <button onClick={toggleTheme}>Click me</button>
    </div>
  );
}

export default About;
