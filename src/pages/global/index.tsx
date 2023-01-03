import React from "react";
import { useSelector as Selector } from "react-redux";

export const GlobalValue: React.FC = () => {
  const GlobalData = Selector((state: any) => state.countReducer.value);
  return <div style={{ color: "white" }}>{GlobalData}</div>;
};
