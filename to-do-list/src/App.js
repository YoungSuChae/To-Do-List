import React from "react";

// import Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Pages
import LandingPage from "./pages/LandingPage";
import Registration from "./pages/Registration";
import ForgotPassword from "./pages/Forgot";
import MainPage from "./pages/mainPage";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/forgotPassword" element={<ForgotPassword />} />
          <Route exact path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
