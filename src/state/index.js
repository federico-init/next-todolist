import { createContext } from "react";

export const AppContext = createContext({});

export const initialState = {
  username: "",
  todos: [],
};
