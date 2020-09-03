import { combineReducers } from "redux";
import userReducer from "./user";
import voteReducer from "./vote";
import adminReducer from "./admin";
import studentReducer from "./student";
import feedbackReducer from "./feedback";

export default combineReducers({
  user: userReducer,
  vote: voteReducer,
  admin: adminReducer,
  student: studentReducer,
  feedback: feedbackReducer,
});
