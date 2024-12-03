"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

function Counter({ initialCount = 99,color = "", shdba="" }) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className={styles.counter} id={shdba}>
      <button style={{background:color}} className={styles.btn} onClick={decrement}>
        minus
      </button>
      <span className={styles.count}>{count}</span>
      <button style={{background:color}} className={styles.btn} onClick={increment}>
        plus
      </button>
    </div>
  );
}

export default Counter;
