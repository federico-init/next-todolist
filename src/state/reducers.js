export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_DONE":
      return;
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};
