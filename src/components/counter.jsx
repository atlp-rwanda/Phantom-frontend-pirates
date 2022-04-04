import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementActionCreator as increment,
  decrementActionCreator as decrement,
  resetActionCreator as reset,
} from "../state/actionCreators/index";

/* ==========================
Counter Function Component
========================== */

const Counter = () => {
  const counter = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  // Handle click event functions

  const incrementHandleClick = () => {
    dispatch(increment());
  };
  const decrementHandleClick = () => {
    dispatch(decrement());
  };
  const resetHandleClick = () => {
    dispatch(reset());
  };

  return (
    <div>
      <div className="flex justify-center pb-2">
        <h1 className="py-[3px] text-3xl">{counter}</h1>
      </div>
      <div className="flex justify-center pb-4">
        <div className="px-6 border-2 border-sky-500 shadow-lg">
          <button className="decBtn" onClick={decrementHandleClick}>
            -
          </button>
        </div>
        <div className="px-6">
          <button className="resetBtn" onClick={resetHandleClick}>
            reset
          </button>
        </div>
        <div className="px-6 border-2 border-sky-500 shadow-lg">
          <button className="incBtn" onClick={incrementHandleClick}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;