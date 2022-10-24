import React, { useState } from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { BalanceProp } from "../types/balance";
const Balance = ({ balance, setSaving }: BalanceProp) => {
  const [amount, setAmount] = useState(0);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (amount < balance) {
      setSaving((saving) => saving + amount);
      setAmount(0);
    } else {
      return alert("Balance cannot be less than 0");
    }
  };

  const storeInputAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setAmount(Number(event.target.value));
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{ marginBottom: 5 }}
      onSubmit={(e) => submitHandler(e)}
      gap={2}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Typography>Current balance: {balance}</Typography>
      <TextField
        label="Transfer to saving account:"
        variant="filled"
        type="text"
        name="transfer"
        id="transfer"
        onChange={storeInputAmount}
        value={amount}
      />
      <Button
        type="submit"
        size="medium"
        startIcon={<SaveIcon />}
        variant="contained"
        color="secondary"
      >
        Transfer
      </Button>
    </Box>
  );
};

export default Balance;
