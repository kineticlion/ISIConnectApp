import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "admin",
  initialState: [],
  reducers: {
    adminCreated: (admin, action) => {
      admin.push(action.payload);
    },
    adminRemoved: (admin, action) => {
      const filteredAdmins = admin.filter(
        (admin) => admin.id !== action.payload.id
      );
      admin.splice(0, admin.length, ...filteredAdmins);
    },
    adminsReceived: (admin, action) => {
      admin.splice(0, admin.length, ...action.payload.data);
    },
  },
});

export default slice.reducer;
export const { adminCreated, adminRemoved } = slice.actions;
