import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "admin",
  initialState: {
    data: {},
    loading: false,
  },
  reducers: {
    adminCreated: (admin, action) => {
      admin.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { userRequested, userReceived, userCreatedVote } = slice.actions;
