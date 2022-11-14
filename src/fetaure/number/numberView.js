import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementByFive, decrement } from "./numberSlice";

export default function NumberView() {
  const updateCount = useSelector((state) => state.number.count);
  const dispatch = useDispatch();
  return (
    <>
      <div>Count:{updateCount}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByFive())}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}
