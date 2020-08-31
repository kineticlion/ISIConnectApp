import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

export default function () {
  const initialState = {
    entities: {
      vote: [
        {
          id: "1",
          title: "The best instructor of August 2020?",
          author: "Sufiyan Saboowala",
          creationDate: Date(Date.now()),
        },
        {
          id: "2",
          title: "Features to be implemented in August 2020?",
          author: "Sufiyan Saboowala",
          creationDate: Date(Date.now()),
        },
        {
          id: "3",
          title: "Best projects in 2020?",
          author: "Sufiyan Saboowala",
          creationDate: Date(Date.now()),
        },
        {
          id: "4",
          title: "The best instructor of August 2020?",
          author: "Sufiyan Saboowala",
          creationDate: Date(Date.now()),
        },
        {
          id: "5",
          title: "Features to be implemented in August 2020?",
          author: "Sufiyan Saboowala",
          creationDate: Date(Date.now()),
        },
        {
          id: "6",
          title: "Best projects in 2020?",
          author: "Sufiyan Saboowala",
          creationDate: Date(Date.now()),
        },
      ],
      admin: [],
    },
  };
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
    preloadedState: initialState,
  });
}
