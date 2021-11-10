import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import "./App.css";

export default function App() {
  return (
    <>

      <Router>
        <div id="logo">
          <Link to="/">BMI CALCULATOR</Link>
        </div>
        <div id="main-nav">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Results</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}
