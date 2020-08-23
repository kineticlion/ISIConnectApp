import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "admin",
  initialState: {
    data: {},
    loading: false,
  },
  reducers: {
    userRequested: (user, action) => {
      user.loading = true;
    },
    userReceived: (user, action) => {
      user.data = action.payload;
      user.loading = false;
    },
    uriReceived: (user, action) => {
      user.data.uri = action.payload;
    },
    userUpdated: (user, action) => {
      user.data = { ...user.data, ...action.payload };
    },
    userCreatedVote: (user, action) => {
      user.votes.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { userRequested, userReceived, userCreatedVote } = slice.actions;
