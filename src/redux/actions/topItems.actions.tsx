import { ActionCreator, Dispatch } from "redux";
import {
  topItemsi,
  UPDATING_TOP_ITEMS,
  UpdatingTopItemsT,
} from "../types/topItems.types";

export const TopItemsUpdateAction: ActionCreator<UpdatingTopItemsT> = (
  payload: topItemsi
) => {
  return { type: UPDATING_TOP_ITEMS, payload: payload };
};

export const UpdateTopItems = (
  payload: any[],
  key: "tracks" | "artists"
): any => {
  return async (dispatch: Dispatch, getState: any) => {
    let formObj = getState()?.UpdateTopItemsReducer;

    const stateArr: any[] = [];

    payload.map((item: any) => {
      const newObj: any = {
        name: item.name,
        url: item.external_urls.spotify,
      };

      if (key === "tracks") {
        newObj.image = item.album.images[0].url;
        newObj.artist = item.artists[0].name;
      } else {
        newObj.image = item.images[0].url;
        newObj.genres = item.genres;
      }

      stateArr.push(newObj);
    });

    const updatedDetails = { ...formObj, [key]: stateArr };

    dispatch(TopItemsUpdateAction(updatedDetails));
  };
};
