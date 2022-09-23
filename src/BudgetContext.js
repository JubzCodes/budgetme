import { useContext, useState, useEffect } from "react";
import React from "react";
import { nanoid } from "nanoid";

// LOCAL STORAGE HOOK
const useLocalStorage = (key, defaultValue) => {

//state of local storage
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

//updates local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}


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

// HANDLE DELETE EXPENSE
  const deleteExpense = ({ id }) => {
    setExpenses((prev) => {
      return prev.filter((expense) => expense.id !== id);
    });
  }

  return (
    <BudgetsContext.Provider value={{}}>
      {children}
    </BudgetsContext.Provider>
  )
}