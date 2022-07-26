import { useState } from "react";

import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import styles from "./Counter.module.css";
import { incrementAsync } from "./state/actions/incrementAsync";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementIfOdd,
  selectCountAndStatus,
} from "./state/counterSlice";

export function CounterContainer() {
  const { value, status } = useAppSelector(selectCountAndStatus);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");
  const [translate] = useTranslation();

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      {translate("counter.status", { status })}
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{value}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          {/* Setting count allows you to pluralize / display different text based on the count
              See: https://www.i18next.com/translation-function/plurals
          */}
          {translate("counter.add", { count: incrementValue })}
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button className={styles.button} onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </div>
  );
}
