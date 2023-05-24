export interface topItemsi {
  artists:
    | [
        {
          genres: string[];
          url: string;
          image: string;
          name: string;
        }
      ]
    | [];
  tracks:
    | [
        {
          url: string;
          name: string;
          image: string;
          artist: string;
        }
      ]
    | [];
}

export const UPDATING_TOP_ITEMS = "UPDATING_TOP_ITEMS";

export interface updateTopItems {
  type: typeof UPDATING_TOP_ITEMS;
  payload: topItemsi;
}

export type UpdatingTopItemsT = updateTopItems;
