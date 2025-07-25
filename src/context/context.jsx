import { createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
  const onSent = async (prompt) => {
    await runChat(prompt);
  };
  onSent("What is React?");

  const contextValue = {};

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
