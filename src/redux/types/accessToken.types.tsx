export interface accessTokeni {
  accessToken: string;
}

export const UPDATING_ACCESS_TOKEN = "UPDATING_ACCESS_TOKEN";

export interface updateToken {
  type: typeof UPDATING_ACCESS_TOKEN;
  payload: accessTokeni;
}

export type UpdatingTokenT = updateToken;
