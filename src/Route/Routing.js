import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to Our Website!</h1>
      <p>This is the home page.</p>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}
function Login({ setAuth }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "user" && password === "pass") {
      setAuth(true);
      navigate("/dashboard"); 
    } else {
      alert("Invalid credentials! Try user/pass");
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: 10 }}>
          <label>Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
function Dashboard({ auth }) {
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return (
    <div style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>Welcome, you are authenticated!</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
export default function Routing() {
  const [auth, setAuth] = useState(false); 
  return (
    <Router>
      <nav style={{ padding: 10, background: "#333", color: "white" }}>
        <Link style={{ marginRight: 10, color: "white" }} to="/">Home</Link>
        <Link style={{ marginRight: 10, color: "white" }} to="/login">Login</Link>
        <Link style={{ marginRight: 10, color: "white" }} to="/dashboard">Dashboard</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/dashboard" element={<Dashboard auth={auth} />} />
      </Routes>
    </Router>
  );
}
