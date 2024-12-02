import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk("userSlice/getUsers", async () => {
  const res = await fetch("https://dummyjson.com/users?limit=10");
  if(!res.ok) {
    throw new Error("failed to fetch users");
  }
  const data = await res.json();
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: { data: [], isLoading: false, status: null, error : null },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.status = "pending";
      state.isLoading = true;
      state.error = null;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.status = "fullfilled";
      state.isLoading = false;
      state.data = action.payload.users;
      state.error = null;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.status = "Rejected";
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
