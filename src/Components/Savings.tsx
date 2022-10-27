import React, { useState } from "react";
import { SavingProp } from "../types/balance";
import { Typography, Box, TextField, CircularProgress } from "@mui/material";
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
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          value={(saving / target) * 100}
          variant="determinate"
          color="secondary"
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="text.secondary"
          >{`${Math.round((saving / target) * 100)}%`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Savings;
