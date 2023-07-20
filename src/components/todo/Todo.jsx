// import React
import { useContext, useState } from "react";

// import state
import { AppContext } from "@/state";

import styles from "./Todo.module.scss";

import { FaCircleXmark } from "react-icons/fa6";

const Todo = ({ data }) => {
  const { dispatch } = useContext(AppContext);

  const [isChecked, setIsChecked] = useState(data.completed);

  const onHandleChange = () => {
    dispatch({
      type: "CHANGE_TODO_STATE",
      payload: data.id,
    });

    setIsChecked(!isChecked);
  };

  const onHandleDelete = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: data.id,
    });
  };

  return (
    <div className={`${isChecked && styles.completed} ${styles.Todo}`}>
      <input
        className={styles.checkboxInput}
        type="checkbox"
        checked={isChecked}
        onChange={onHandleChange}
      />
      <p className={styles.task}>{data.task}</p>
      <FaCircleXmark onClick={() => onHandleDelete(data.id)} />
    </div>
  );
};

export default Todo;
