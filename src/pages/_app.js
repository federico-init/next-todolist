// import React
import { useReducer } from "react";

// import state
import { AppContext, initialState } from "@/state";
import { mainReducer } from "@/state/reducers";

// import style
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
