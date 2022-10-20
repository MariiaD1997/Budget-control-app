import React, { useState } from "react";
import { BalanceProp } from "../types/balance";

const Balance = ({ balance, setSaving }: BalanceProp) => {
  const [amount, setAmount] = useState(0);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSaving((saving) => saving + amount);
  };

  const storeInputAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };
  return (
    <form onSubmit={submitHandler}>
      <h4>Current balance: {balance}</h4>
      <label htmlFor="transfer">Transfer to saving account: </label>
      <input
        type="text"
        name="transfer"
        id="transfer"
        onChange={storeInputAmount}
      />
      <button>Transfer</button>
    </form>
  );
};

export default Balance;
