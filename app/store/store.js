import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

export default function () {
  const initialState = {
    entities: {
      user: {
        data: {
          accessToken: "",
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
      admin: [
        {
          id: "654",
          firstName: "Raul",
          lastName: "Ramirez",
          creationDate: Date(Date.now()),
          uri: "",
        },
        {
          id: "323",
          firstName: "Stephane",
          lastName: "Lapointe",
          creationDate: Date(Date.now()),
          uri: "",
        },
        {
          id: "98",
          firstName: "Reza",
          lastName: "Madabadi",
          creationDate: Date(Date.now()),
          uri: "",
        },
        {
          id: "54",
          firstName: "Guillaume",
          lastName: "Cote",
          creationDate: Date(Date.now()),
          uri: "",
        },
        {
          id: "659",
          firstName: "Rossy",
          lastName: "Tshibangu",
          creationDate: Date(Date.now()),
          uri: "",
        },
        {
          id: "692",
          firstName: "Ayman",
          lastName: "Mohammed",
          creationDate: Date(Date.now()),
          uri: "",
        },
        {
          id: "626",
          firstName: "Sarina",
          lastName: "Barnard",
          creationDate: Date(Date.now()),
          uri: "",
        },
        {
          id: "29",
          firstName: "Kuba",
          lastName: "Madabadi",
          creationDate: Date(Date.now()),
          uri: "",
        },
        {
          id: "78",
          firstName: "Jude",
          lastName: "Braun",
          creationDate: Date(Date.now()),
          uri: "",
        },
        {
          id: "265",
          firstName: "Fred",
          lastName: "Milner",
          creationDate: Date(Date.now()),
          uri: "",
        },
      ],
    },
  };
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
    preloadedState: initialState,
  });
}
