import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

export default function () {
  const initialState = {
    entities: {
      user: {
        data: {
          uri: "",
          firstName: "Sufiyan",
          lastName: "Saboowala",
          id: Date.now(),
          type: "Super Admin",
          email: "Email@gmail.com",
          phone: 4387259295,
          zipcode: "H3N2L8",
        },
      },
    },
  };
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
    preloadedState: initialState,
  });
}
