import { createSlice } from "@reduxjs/toolkit";
import Api from "../api/Api";

const slice = createSlice({
  name: "vote",
  initialState: {
    data: [],
  },
  reducers: {
    votePollCreated: (vote, action) => {
      vote.data.push(action.payload);
    },
    voteOptionSelected: (vote, action) => {
      const filteredVote = vote.data.filter(
        (item) => item.title === action.payload.title
      );
      filteredVote[0].totalVotes++;
      filteredVote[0].options.map((option) => {
        if (option.id === action.payload.id) {
          ++option.count;
          option.isSelected = true;
        }
      });
    },
  },
});
export default slice.reducer;
export const { votePollCreated } = slice.actions;
