import React, { SyntheticEvent, useState } from "react";
import { MoneyProps } from "../types/money";
const Bill = ({ name, list, setList }: MoneyProps) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const changeTitleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const dateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const onSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    setList([{ id: Date.now(), name, amount, date }, ...list]);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title of {name}</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={changeTitleHandler}
          />
        </div>
        <div>
          <label htmlFor="amount">Amount of {name}</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="date">Date of {name}</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <button type="submit">Save</button>
      </form>

      <ul>
        {list.length > 0 &&
          list.map((element) => (
            <li key={Date.now()}>
              {element.name}: {element.amount} | {element.date}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Bill;
