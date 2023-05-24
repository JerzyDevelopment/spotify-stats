import { ActionCreator, Dispatch } from "redux";
import { UserFollowingResponseObj } from "../../interfaces";
import {
  userDetailsi,
  userFollowingi,
  UPDATING_USER_DETAILS,
  UPDATING_USER_FOLLOWING,
  UpdatingUserDetailsT,
  UpdatingUserFollowingT,
} from "../types/userDetails.types";

export const UserDetailsUpdateAction: ActionCreator<UpdatingUserDetailsT> = (
  payload: userDetailsi
) => {
  return { type: UPDATING_USER_DETAILS, payload: payload };
};

export const UserFollowingUpdateAction: ActionCreator<
  UpdatingUserFollowingT
> = (payload: userFollowingi) => {
  return { type: UPDATING_USER_FOLLOWING, payload: payload };
};

export const UpdateUserDetails = (payload: object): any => {
  return async (dispatch: Dispatch, getState: any) => {
    let formObj = getState()?.UpdateUserDetailsReducer;

    const updatedDetails = { ...payload };

    dispatch(UserDetailsUpdateAction(updatedDetails));
  };
};

export const UpdateUserFollowing = (payload: any[]): any => {
  return async (dispatch: Dispatch, getState: any) => {
    let formObj = getState()?.UpdateUserFollowingReducer;

    const stateArr: {
      url: string;
      followers: number;
      genres: string[];
      image: string;
      name: string;
    }[] = [];

    payload.map((item: UserFollowingResponseObj) => {
      const newObj = {
        url: item.external_urls.spotify,
        followers: item.followers.total,
        genres: item.genres,
        image: item.images[0].url,
        name: item.name,
      };

      stateArr.push(newObj);
    });

    const updatedDetails = { data: stateArr };

    dispatch(UserFollowingUpdateAction(updatedDetails));
  };
};
