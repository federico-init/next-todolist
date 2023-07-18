// import React
import { useContext } from "react";

// import state
import { AppContext } from "@/state";

// import component
import Todo from "../todo/Todo";

// import style
import styles from "./TodoList.module.scss";

const TodoList = () => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className={styles.TodoList}>
      <h4>Your tasks</h4>

      <div className={styles.list}>
        {state?.todos ? (
          state.todos.map((todo) => <Todo key={todo.id} content={todo} />)
        ) : (
          <h3>No tasks here, well done!</h3>
        )}
      </div>
    </div>
  );
};

export default TodoList;
