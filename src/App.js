import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageSignIn from "./components/AcessPages/PageSignIn";
import PageSignUp from "./components/AcessPages/PageSignUp";
import PrivatePage from "./components/PrivatePage";
import PageRegisters from "./components/Homepage/PageRegisters";
import PageReceived from "./components/NewTransactions/PageReceived";
import PageSpended from "./components/NewTransactions/PageSpended";
import "./assets/css/reset.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageSignIn />} />
          <Route path="/cadastro" element={<PageSignUp />} />
          <Route
            path="/registros"
            element={
              <PrivatePage>
                <PageRegisters />
              </PrivatePage>
            }
          />
          <Route
            path="/entrada"
            element={
              <PrivatePage>
                <PageReceived />
              </PrivatePage>
            }
          />
          <Route
            path="/saida"
            element={
              <PrivatePage>
                <PageSpended />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
