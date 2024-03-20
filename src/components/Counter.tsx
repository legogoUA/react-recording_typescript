import { useContext } from "react";
import { DispatchContext, StateContext } from "./Store";

export const Counter = () => {
  const dispatch = useContext(DispatchContext);
  const {amount} = useContext(StateContext);

  const decrease = () => dispatch({ type: "decrease" });
  const increase = () => dispatch({ type: "increase" });

  return (
    <div>
      <button onClick={decrease}>-</button>
      {amount}
      <button onClick={increase}>+</button>
    </div>
  );
};
