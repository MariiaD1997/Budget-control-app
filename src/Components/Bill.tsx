import React, { SyntheticEvent, useState } from "react";
import { List, ListItem, Box, TextField, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { MoneyProps } from "../types/money";
const Bill = ({ name, list, setList, balance }: MoneyProps) => {
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

  const clearInput = () => {
    setTitle("");
    setAmount(0);
    setDate("");
  };
  const onSubmit = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    if (name === "Expence") {
      if (amount > balance) {
        return alert(`You don't have enough money!`);
      }
    }
    setList([{ id: Date.now(), name, amount, date }, ...list]);
    clearInput();
  };
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{ marginBottom: 5 }}
      onSubmit={(e) => onSubmit(e)}
      gap={2}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <TextField
        label={`Title of ${name}`}
        variant="filled"
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={changeTitleHandler}
        required
      />
      <TextField
        label={`Amount of ${name}`}
        variant="filled"
        type="number"
        name="amount"
        id="amount"
        InputLabelProps={{
          shrink: true,
        }}
        value={amount}
        onChange={amountChangeHandler}
        required
      />
      <TextField
        label={`Date of ${name}`}
        variant="filled"
        type="date"
        name="date"
        id="date"
        value={date}
        onChange={dateChangeHandler}
        required
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button
        type="submit"
        size="medium"
        startIcon={<SaveIcon />}
        variant="contained"
        color="secondary"
      >
        Save
      </Button>

      <List>
        {list.length > 0 &&
          list.map((element) => (
            <ListItem key={Date.now()}>
              {element.name}: {element.amount} | {element.date}
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Bill;
