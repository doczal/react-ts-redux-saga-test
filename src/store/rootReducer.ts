import { combineReducers } from "redux";
import catReducer from "./cats";
import voteReducer from "./votes";

const rootReducer = combineReducers({
  cats: catReducer,
  votes: voteReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
