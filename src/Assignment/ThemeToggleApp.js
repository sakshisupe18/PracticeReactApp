import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});
function ThemeProvider({ children }) {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  };
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((p) => (p === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className="toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
function ThemeToggleApp() {
  return (
    <ThemeProvider>
      <div className="container">
        <h1>Theme Toggle Using Context API</h1>
        <ThemeToggle />
        <div className="card">
          <h3>Product</h3>
          <p>Price: $200</p>
        </div>
      </div>

      <style>{`
        :root {
          --bg: #ffffff;
          --text: #111827;
          --card: #ffffff;
          --border: #d1d5db;
        }
        [data-theme="dark"] {
          --bg: #0f172a;
          --text: #e2e8f0;
          --card: #1e293b;
          --border: #334155;
        }
        body, html, #root {
          margin: 0;
          padding: 0;
          background: var(--bg);
          color: var(--text);
          font-family: Arial;
        }
        .container {
          padding: 20px;
        }
        .toggle-btn {
          padding: 10px 16px;
          background: var(--card);
          border: 1px solid var(--border);
          color: var(--text);
          border-radius: 6px;
          cursor: pointer;
          margin-bottom: 20px;
        }
        .card {
          background: var(--card);
          padding: 16px;
          border-radius: 10px;
          border: 1px solid var(--border);
          width: 200px;
        }
      `}</style>
    </ThemeProvider>
  );
}

export default ThemeToggleApp;
