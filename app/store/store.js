import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reducer from "./reducer";
import api from "./middleware/api";

export default function () {
  const initialState = {
    entities: {
      vote: {
        data: [
          {
            id: "1",
            title: "Best Teacher of August 2020?",
            author: "Sufiyan Saboowala",
            creationDate: Date(Date.now()),
            options: [
              { id: 1, name: "Raul Ramirez", count: 30, isSelected: false },
              {
                id: 2,
                name: "Stephane Lapointe",
                count: 15,
                isSelected: false,
              },
              { id: 3, name: "Matthew Johnson", count: 2, isSelected: false },
              { id: 4, name: "Steve Austin", count: 10, isSelected: false },
            ],
            totalVotes: 57,
          },
          {
            id: "2",
            title: "Best project in 2020?",
            author: "Sufiyan Saboowala",
            creationDate: Date(Date.now()),
            options: [
              { id: 1, name: "ISI drone", count: 10, isSelected: false },
              { id: 2, name: "ISIConnect", count: 20, isSelected: false },
              { id: 3, name: "Battle Ship", count: 15, isSelected: false },
              { id: 4, name: "Memory Game", count: 18, isSelected: false },
            ],
            totalVotes: 63,
          },
          {
            id: "3",
            title: "Best student of 2020?",
            author: "Sufiyan Saboowala",
            creationDate: Date(Date.now()),
            options: [
              { id: 1, name: "Lionel Messi", count: 80, isSelected: false },
              { id: 2, name: "Neymar Jr", count: 60, isSelected: false },
              {
                id: 3,
                name: "Cristiano Ronaldo",
                count: 140,
                isSelected: false,
              },
              { id: 4, name: "David Beckham", count: 20, isSelected: false },
            ],
            totalVotes: 300,
          },
        ],
      },
      admin: [],
      feedback: [
        {
          id: "1",
          title: "Rate our quality of education",
          options: [
            { id: 1, name: "Poor" },
            { id: 2, name: "Not Bad" },
            { id: 3, name: "OK" },
            { id: 4, name: "Good" },
            { id: 5, name: "Excellent" },
          ],
          rating: 3,
          totalSubmissions: 0,
          totalRating: 0,
        },
        {
          id: "2",
          title: "Rate production course content",
          options: [
            { id: 1, name: "Poor" },
            { id: 2, name: "Not Bad" },
            { id: 3, name: "OK" },
            { id: 4, name: "Good" },
            { id: 5, name: "Excellent" },
          ],
          rating: 3,
          totalSubmissions: 0,
          totalRating: 0,
        },
      ],
      student: [],
    },
  };
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), api],
    preloadedState: initialState,
  });
}
