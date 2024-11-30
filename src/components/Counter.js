import React from "react";
import { Button, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../redux/features/counter/counterSlice";
import { useState } from "react";
const Counter = () => {
  const [amount, setAmount] = useState();

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };
  const handleIncAmount = () => {
    if(!isNaN(amount))
    dispatch(incrementByAmount(amount));
  };

  return (
      <Paper
      elevation={12}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent : 'center',
          gap: 2,
          padding : 6,
          borderRadius : "16px"
        }}
      >
        <Typography variant="h5" >Counter : {count} </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button onClick={handleDecrement} variant="contained">
              -
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={handleReset} variant="contained" >
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleIncrement} >
              +
            </Button>
          </Grid>
        </Grid>

        <Stack direction="row" sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            value={amount}
            label="amount"
            type="number"
            variant="outlined"
            onChange={(e) => setAmount(e.target.value)}
            autoComplete="OFF"
            sx={{height : 56}}
          />
          <Button onClick={handleIncAmount} variant="contained" size="large" sx={{height : 56}}>
            Increment by Amount
          </Button>
        </Stack>
      </Paper>
  );
};

export default Counter;
