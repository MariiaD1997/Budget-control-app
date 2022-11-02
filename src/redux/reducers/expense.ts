import { createSlice } from "@reduxjs/toolkit";
import { MoneyItem } from "../../types/money";

const initialState: MoneyItem[] = [];
const expenseSlicer = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state = [...state, action.payload];
      console.log("addexpense is invoked");
    },
    deleteExpense: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const expenseReducer = expenseSlicer.reducer;
export const { addExpense, deleteExpense } = expenseSlicer.actions;
export default expenseReducer;
