import React from "react";
import { Route, Routes } from "react-router";
import { CountTodo } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<CountTodo />} />
      </Routes>
    </>
  );
}

export default App;
