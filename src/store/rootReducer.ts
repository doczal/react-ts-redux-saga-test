import { combineReducers } from "redux";
import catReducer from "./cats";

const rootReducer = combineReducers({
  cats: catReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
