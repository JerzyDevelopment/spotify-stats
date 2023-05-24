import {
  userDetailsi,
  userFollowingi,
  UPDATING_USER_DETAILS,
  UPDATING_USER_FOLLOWING,
  UpdatingUserDetailsT,
  UpdatingUserFollowingT,
} from "../types/userDetails.types";

const initialUserDetailsState: userDetailsi = {
  country: "",
  display_name: "",
  email: "",
  explicit_content: false,
  url: "",
  followers: 0,
  product: "",
};

const initialUserFollowingState: userFollowingi = {
  data: [],
};

export const UpdateUserDetailsReducer = (
  state: userDetailsi = initialUserDetailsState,
  action: UpdatingUserDetailsT
): userDetailsi => {
  switch (action.type) {
    case UPDATING_USER_DETAILS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

export const UpdateUserFollowingReducer = (
  state: userFollowingi = initialUserFollowingState,
  action: UpdatingUserFollowingT
): userFollowingi => {
  switch (action.type) {
    case UPDATING_USER_FOLLOWING: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
