import { combineReducers } from "redux";
import userReducer from "./user";
import voteReducer from "./vote";
import adminReducer from "./admin";

export default combineReducers({
  user: userReducer,
  vote: voteReducer,
  admin: adminReducer,
});
