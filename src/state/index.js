import { createContext } from "react";

export const AppContext = createContext({});

export const initialState = {
  todos: [
    {
      id: 1,
      task: "Learn Javascript 💻",
      completed: true,
    },
    {
      id: 2,
      task: "Learn React 💻",
      completed: true,
    },
    {
      id: 3,
      task: "Learn Next.js 💻",
      completed: false,
    },
    {
      id: 4,
      task: "Keep coding!",
      completed: false,
    },
  ],
};
