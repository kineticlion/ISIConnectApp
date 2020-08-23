import { createSlice } from "@reduxjs/toolkit";
import entities from "./entities";

const slice = createSlice({
  name: "vote",
  initialState: {
    data: {},
    loading: false,
  },
  reducers: {
    votePollCreated: (vote, action) => {
      vote.push(action.payload);
    },
  },
});

export default slice.reducer;
export const { votePollCreated } = slice.actions;
