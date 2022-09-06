import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from "./components/PageLogin";
import "./assets/css/reset.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
