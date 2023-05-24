import {
  accessTokeni,
  UPDATING_ACCESS_TOKEN,
  UpdatingTokenT,
} from "../types/accessToken.types";

const initialTokenState: accessTokeni = {
  accessToken: "",
};

export const UpdateTokenReducer = (
  state: accessTokeni = initialTokenState,
  action: UpdatingTokenT
): accessTokeni => {
  switch (action.type) {
    case UPDATING_ACCESS_TOKEN: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
