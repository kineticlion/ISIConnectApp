import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "feedback",
  initialState: {},
  reducers: {
    feedbackCreated: (feedback, action) => {
      feedback.push(action.payload);
    },
    feedbackSubmitted: (feedback, action) => {
      const filteredFeedback = feedback.filter(
        (item) => item.id === action.payload.id
      );
      ++filteredFeedback[0].totalSubmissions;
      filteredFeedback[0].totalRating += action.payload.rating;
    },
  },
});

export default slice.reducer;
export const { feedbackPollCreated } = slice.actions;
