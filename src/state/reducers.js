export const mainReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TODO_STATE":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload],
      };
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
