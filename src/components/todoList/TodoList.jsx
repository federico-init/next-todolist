// import React
import { useContext, useState } from "react";

// import state
import { AppContext } from "@/state";

// import component
import Todo from "../todo/Todo";

// import style
import styles from "./TodoList.module.scss";

// import assets
import { FaPlus } from "react-icons/fa6";

const TodoList = () => {
  const { state, dispatch } = useContext(AppContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [todoInput, setTodoInput] = useState("");

  const onHandleModal = () => {
    setTodoInput("");
    setIsModalOpen((prev) => !prev);
  };

  const onHandleInput = (e) => {
    setTodoInput(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TODO",
      payload: {
        id: Math.floor(Math.random() * 999),
        task: todoInput,
        completed: false,
      },
    });

    // pulisco il text input dopo il submit
    setTodoInput("");
    setIsModalOpen(false);
  };

  return (
    <div className={styles.TodoList}>
      <div className={styles.TodoList__heading}>
        <h4>Your tasks</h4>
        <div className={styles.TodoList__addBtn} onClick={onHandleModal}>
          <FaPlus />
        </div>
      </div>

      <div className={styles.list}>
        {state?.todos ? (
          state.todos.map((todo) => <Todo key={todo.id} data={todo} />)
        ) : (
          <h3>No tasks here, well done!</h3>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.TodoList__modal}>
          <form
            className={styles.TodoList__modal__form}
            onSubmit={onHandleSubmit}
          >
            <input
              type="text"
              value={todoInput}
              placeholder="Add a new task"
              onChange={onHandleInput}
            />
            <div className={styles.TodoList__modal__buttons}>
              <input type="button" value="Save" onClick={onHandleSubmit} />
              <input type="button" value="Cancel" onClick={onHandleModal} />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default TodoList;
