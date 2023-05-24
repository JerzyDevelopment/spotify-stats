import { UpdateTokenReducer } from "./accessToken.reducers";
import { UpdateUserDetailsReducer } from "./userDetails.reducers";
import { UpdateTopItemsReducer } from "./topItems.reducers";
import { UpdateUserFollowingReducer } from "../reducers/userDetails.reducers";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  UpdateTokenReducer,
  UpdateUserDetailsReducer,
  UpdateTopItemsReducer,
  UpdateUserFollowingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
