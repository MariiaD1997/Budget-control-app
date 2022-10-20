import React, { useState, useEffect } from "react";
import "./App.css";
import Bill from "./Components/Bill";
import Savings from "./Components/Savings";
import Balance from "./Components/Balance";
import { MoneyItem } from "./types/money";

function App() {
  const [income, setIncome] = useState<MoneyItem[]>([]);
  const [expense, setExpense] = useState<MoneyItem[]>([]);
  const [balance, setBalance] = useState(0);
  const [saving, setSaving] = useState(0);
  const totalIncome = income.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );
  const totalExpenses = expense.reduce(
    (previousValue, currentValue) => previousValue + currentValue.amount,
    0
  );

  useEffect(() => {
    setBalance(totalIncome - totalExpenses - saving);
  }, [income, expense, saving]);

  return (
    <div className="App">
      <Bill name="Income" list={income} setList={setIncome} balance={balance} />
      <Bill
        name="Expence"
        list={expense}
        setList={setExpense}
        balance={balance}
      />
      <Savings saving={saving} />
      <Balance balance={balance} setSaving={setSaving} />
    </div>
  );
}

export default App;
