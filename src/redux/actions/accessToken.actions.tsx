import { ActionCreator, Dispatch } from "redux";
import {
  accessTokeni,
  UPDATING_ACCESS_TOKEN,
  UpdatingTokenT,
} from "../types/accessToken.types";

export const TokenUpdateAction: ActionCreator<UpdatingTokenT> = (
  payload: accessTokeni
) => {
  return { type: UPDATING_ACCESS_TOKEN, payload: payload };
};

export const UpdateToken = (payload: string): any => {
  return async (dispatch: Dispatch, getState: any) => {
    let formObj = getState()?.UpdateTokenReducer;

    const updatedDetails = { ...formObj, accessToken: payload };

    dispatch(TokenUpdateAction(updatedDetails));
  };
};
