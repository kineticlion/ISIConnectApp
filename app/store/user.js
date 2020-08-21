import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

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
    userReceived: (user, action) => {
      user.data = action.payload;
      user.loading = false;
    },
    uriReceived: (user, action) => {
      user.data.uri = action.payload;
    },
  },
});

export default slice.reducer;
export const { userRequested, userReceived } = slice.actions;

//Action Creators

export const loadUser = () => (dispatch) => {
  dispatch(
    apiCallBegan({
      url: "/bugs",
      onStart: userRequested.type,
      onSuccess: userReceived.type,
    })
  );
};
