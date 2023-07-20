export const mainReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TODO_STATE":
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload,
      };
    case "SET_LOGOUT":
      return {
        ...state,
        username: "",
      };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
