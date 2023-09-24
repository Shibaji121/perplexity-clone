import React, { createContext, useState } from "react";

export const Context = createContext();

export default function MyContext(props) {
  const openLoginPop = () => {
    setState((prev) => ({
      ...prev,
      isloginClick: !prev.isloginClick,
    }));
  };

  const closeLoginPop = () => {
    setState((prev) => ({
      ...prev,
      isloginClick: !prev.isloginClick,
    }));
  };

  const setTokenResponse = (response) => {
    console.log(response);
    setState((prev) => ({
      ...prev,
      tokenResponse: response,
    }));
  };

  const initialState = {
    isloginClick: false,
    openLoginPop,
    closeLoginPop,
    tokenResponse: {},
    setTokenResponse,
  };

  const [state, setState] = useState(initialState);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
}
