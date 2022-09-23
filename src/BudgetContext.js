import { useContext } from "react";
import React from "react";

const BudgetsContext = React.createContext();

export const useBudgets  = () => {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  return (
    <BudgetsContext.Provider value={{}}>
      {children}
    </BudgetsContext.Provider>
  )
}