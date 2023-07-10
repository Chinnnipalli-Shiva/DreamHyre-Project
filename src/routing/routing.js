import React from "react";
import {BrowserRouter} from "react-router-dom";
import { Route, Routes } from "react-router";
import App from "../App";
import LogIn from "../login/Login";

const Routing = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/dashboard" element={<App />} />
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default Routing;
