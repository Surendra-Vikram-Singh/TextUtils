import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [btnText, setBtnText] = useState("Light Mode");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setBtnText("Dark Mode");
    } else {
      setMode("light");
      setBtnText("Light Mode");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <BrowserRouter>
      <Navbar
        title="My First App"
        about="My About"
        mode={mode}
        toggleMode={toggleMode}
        btnText={btnText}
      />
      <div className="container my-5">
        <Routes>
          <Route
            path="/"
            element={<TextForm heading="Enter the text below " mode={mode} />}
          />
          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
