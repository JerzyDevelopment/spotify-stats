export interface userDetailsi {
  country: string;
  display_name: string;
  email: string;
  explicit_content: boolean;
  url: string;
  followers: number;
  product: string;
}
export interface userFollowingi {
  data:
    | [
        {
          url: string;
          followers: number;
          genres: string[];
          image: string;
          name: string;
        }
      ]
    | [];
}

export const UPDATING_USER_DETAILS = "UPDATING_USER_DETAILS";
export const UPDATING_USER_FOLLOWING = "UPDATING_USER_FOLLOWING";

export interface updateUserDetails {
  type: typeof UPDATING_USER_DETAILS;
  payload: userDetailsi;
}
export interface updateUserFollowing {
  type: typeof UPDATING_USER_FOLLOWING;
  payload: userFollowingi;
}

export type UpdatingUserDetailsT = updateUserDetails;
export type UpdatingUserFollowingT = updateUserFollowing;
