import React from "react";
import Login from "./components/Login/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
