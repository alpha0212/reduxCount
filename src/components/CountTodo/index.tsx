import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { decrement, increment } from "src/action";

export const CountTodo: React.FC = () => {
  const dispatch = useDispatch();
  const plusOnClick = () => {
    dispatch(increment());
  };
  const minusOnClick = () => {
    dispatch(decrement());
  };

  const list = useSelector((state: any) => state.countReducer.value);
  console.log(list);
  return (
    <>
      <div style={{ display: "flex", marginTop: "20rem" }}>
        <i
          style={{
            width: "2rem",
            height: "2rem",
            marginRight: "10rem",
            border: "1px solid white",
            textAlign: "center",
            background: "white",
            fontWeight: "bold",
            fontSize: "2rem",
            borderRadius: "0.5rem",
          }}
          onClick={minusOnClick}
        >
          -
        </i>
        <h3
          style={{ textAlign: "center", color: "white", marginTop: "0.5rem" }}
        >
          {list}
        </h3>
        <i
          style={{
            width: "2rem",
            height: "2rem",
            marginLeft: "10rem",
            border: "1px solid white",
            textAlign: "center",
            background: "white",
            fontWeight: "bold",
            fontSize: "2rem",
            borderRadius: "0.5rem",
          }}
          onClick={plusOnClick}
        >
          +
        </i>
      </div>
    </>
  );
};
