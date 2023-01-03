import React from "react";
import { Route, Routes } from "react-router";
import { MainPage, GlobalValue } from "./pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/global" element={<GlobalValue />} />
      </Routes>
    </>
  );
};
