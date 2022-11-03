import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";

import { RootState } from "./redux/store";
import Bill from "./Components/Bill";
import Savings from "./Components/Savings";
import Balance from "./Components/Balance";
import { useAppSelector } from "./Components/hooks/reduxHooks";
import { MoneyItem } from "./types/money";

function App() {
  const [balance, setBalance] = useState(0);
  const [saving, setSaving] = useState(0);
  const income = useAppSelector((state: RootState) => state.incomeReducer);
  const expense = useAppSelector((state: RootState) => state.expenseReducer);

  const sum = (item: MoneyItem[]) =>
    item.reduce(
      (previousValue, currentValue) => previousValue + currentValue.amount,
      0
    );

  useEffect(() => {
    const totalIncomes = sum(income);
    const totalExpenses = sum(expense);
    setBalance(totalIncomes - totalExpenses - saving);
  }, [income, expense, saving]);

  return (
    <Box className="App">
      <Grid container display="flex" padding={4}>
        <Grid item md={4}>
          <Bill name="Income" balance={balance} />
        </Grid>
        <Grid item md={4}>
          <Bill name="Expence" balance={balance} />
        </Grid>
        <Grid item md={4}>
          <Savings saving={saving} />
        </Grid>
      </Grid>
      <Balance balance={balance} setSaving={setSaving} />
    </Box>
  );
}

export default App;
