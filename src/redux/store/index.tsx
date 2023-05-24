import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"; // Optional for Redux DevTools
import thunk from "redux-thunk"; // Optional for async actions
import { rootReducer } from "../reducers"; // Root reducer that combines all reducers

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
