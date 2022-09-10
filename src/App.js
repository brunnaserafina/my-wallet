import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useState } from "react";
import PageLogin from "./components/PageLogin";
import PageSignUp from "./components/PageSignUp";
import PageRegisters from "./components/PageRegisters";
import PageReceived from "./components/PageReceived";
import PageSpended from "./components/PageSpended";
import "./assets/css/reset.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider
          value={{ token, setToken, username, setUsername }}
        >
          <Routes>
            <Route path="/" element={<PageLogin />} />
            <Route path="/cadastro" element={<PageSignUp />} />
            <Route path="/registros" element={<PageRegisters />} />
            <Route path="/entrada" element={<PageReceived />} />
            <Route path="/saida" element={<PageSpended />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}
