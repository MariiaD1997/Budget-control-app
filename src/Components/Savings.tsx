import React, { useState } from "react";
import { SavingProp } from "../types/balance";
import { Typography, Box, TextField, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
const Savings = ({ saving }: SavingProp) => {
  const [target, setTarget] = useState(0);
  const targetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTarget(Number(event.target.value));
  };
  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{ marginBottom: 5 }}
      gap={2}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
    >
      <Typography>Current saving: {saving}</Typography>
      <TextField
        label="Set target"
        variant="filled"
        type="number"
        name="target"
        id="target"
        onChange={targetHandler}
      />
      <Typography>Target: {target}</Typography>
      <Typography>Progress: </Typography>
      <progress value={saving} max={target}></progress>
    </Box>
  );
};

export default Savings;
