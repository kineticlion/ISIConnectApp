import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
    data: {},
    loading: false,
  },
  reducers: {
    userRequested: (user, action) => {
      user.loading = true;
    },
    userLoaded: (user, action) => {
      user.data = action.payload;
    },
    userReceived: (user, action) => {
      user.loading = false;
    },
  },
});
export default slice.reducer;
export const { userReceived, userLoaded } = slice.actions;
