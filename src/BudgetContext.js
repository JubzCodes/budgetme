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

// HANDLE ADD BUDGET
  const addBudget = ({ title, max }) => {
    setBudgets((prev) => {
      if (prev.find((budget) => budget.title === title)) {
        return prev;
      }
      return [...prev, { id: nanoid(), title, max }];
    });
  }

// HANDLE ADD EXPENSE
  const addExpense = ({ description, amount, budgetId })  => {
    setExpenses((prev) => {
      return [
        ...prev,
        { id: nanoid(), description, amount, budgetId },
      ];
    });
  }

// HANDLE DELETE BUDGET
  const deleteBudget = ({ id }) => {
    setBudgets((prev) => {
      return prev.filter((budget) => budget.id !== id);
    });
  }

  return (
    <BudgetsContext.Provider value={{}}>
      {children}
    </BudgetsContext.Provider>
  )
}