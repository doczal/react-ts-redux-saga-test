import { applyMiddleware, createStore } from "redux";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./rootReducer";

export default function configureStore() {
  const middlewares = [loggerMiddleware];
  const store = createStore(rootReducer, applyMiddleware(...middlewares));
  return store;
}
