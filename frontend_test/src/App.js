import React from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayOne from "./components/Home/TableManager/DisplayOne";
import Register from "./components/register/Register";
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/home/:id" element={<DisplayOne />} />

      </Routes>
    </Router>
  );
}

export default App;
