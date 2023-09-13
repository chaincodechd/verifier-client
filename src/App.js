import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Scanner from "./pages/Scanner";
import Verify from "./pages/Verify";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Verify />} />
        <Route path="/scanner" element={<Scanner />} />
      </Routes>
    </Router>
  );
}

export default App;
