import { useContext, useState } from "react";
import React from "react";
import { nanoid } from "nanoid";


const BudgetsContext = React.createContext();

export const useBudgets  = () => {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {

// BUGETS & EXPENSE STATE
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

//DISPLAY SELECTED EXPENSES
  const getExpenses = (budgetId) => {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }



  return (
    <BudgetsContext.Provider value={{}}>
      {children}
    </BudgetsContext.Provider>
  )
}