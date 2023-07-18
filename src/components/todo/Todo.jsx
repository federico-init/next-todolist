// import React
import { useContext } from "react";

// import state
import { AppContext } from "@/state";

import styles from "./Todo.module.scss";

const Todo = ({ content }) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className={`${content.completed && styles.completed} ${styles.Todo}`}>
      <p className={styles.task}>{content.task}</p>
      <p className={styles.isDone}>{content.completed ? "Done!" : "Todo"}</p>
    </div>
  );
};

export default Todo;
