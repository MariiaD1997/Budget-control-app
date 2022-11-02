import { configureStore } from "@reduxjs/toolkit";
import incomeReducer from "./reducers/income";
import expenseReducer from "./reducers/expense";

const store = configureStore({
  reducer: { incomeReducer, expenseReducer },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
