import React, { createContext, useState } from "react";

export const Context = createContext();

export default function MyContext(props) {
  const openLoginPop = () => {
    setState({
      ...initialState,
      isloginClick: true,
    });
  };

  const closeLoginPop = () => {
    setState({
      ...initialState,
      isloginClick: false,
    });
  };
  const [initialState, setState] = useState({
    isloginClick: false,
    openLoginPop,
    closeLoginPop,
  });

  return (
    <Context.Provider value={initialState}>{props.children}</Context.Provider>
  );
}
