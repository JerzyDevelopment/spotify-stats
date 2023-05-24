import {
  topItemsi,
  UPDATING_TOP_ITEMS,
  UpdatingTopItemsT,
} from "../types/topItems.types";

const initialTopItemsState: topItemsi = {
  artists: [],
  tracks: [],
};

export const UpdateTopItemsReducer = (
  state: topItemsi = initialTopItemsState,
  action: UpdatingTopItemsT
): topItemsi => {
  switch (action.type) {
    case UPDATING_TOP_ITEMS: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};
