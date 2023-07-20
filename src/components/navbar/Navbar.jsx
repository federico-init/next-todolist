// import React
import { useContext } from "react";

// import state
import { AppContext } from "@/state";

// import style
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { state, dispatch } = useContext(AppContext);

  const onHandleLogout = () => dispatch({ type: "SET_LOGOUT" });

  return (
    <div className={styles.Navbar}>
      <div className={styles.header}>
        <h1>{`Welcome back, ${state.username}!`}</h1>
        <p>
          {state.todos.length != 0
            ? `You've got ${state.todos.length} tasks on your list`
            : "No tasks here, well done!"}{" "}
        </p>
      </div>
      {state.username && (
        <p className={styles.logout} onClick={onHandleLogout}>
          Logout
        </p>
      )}
    </div>
  );
};

export default Navbar;
