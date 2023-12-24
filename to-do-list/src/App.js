import React from "react";

// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Pages
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/mainPage";
import Forgot from "./pages/Forgot";

function App() {
  return (
    <React.StrictMode>
      <Router>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/main" element={<MainPage />} />
          </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
