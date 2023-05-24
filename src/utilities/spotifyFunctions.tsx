import axios from "axios";
import { access } from "fs";
import { UserDetailsResponse, UserFollowingResponse } from "../interfaces";
import { UpdateToken } from "../redux/actions/accessToken.actions";
import { UpdateTopItems } from "../redux/actions/topItems.actions";
import {
  UpdateUserDetails,
  UpdateUserFollowing,
} from "../redux/actions/userDetails.actions";
import store from "../redux/store";

const clientId: any = process.env.REACT_APP_CLIENT_ID;
const clientSecret: any = process.env.REACT_APP_CLIENT_SECRET;
const basicAuth = btoa(`${clientId}:${clientSecret}`);
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-follow-read",
  "user-top-read",
];
const redirectUri = "https://jerzy-spotify-stats.netlify.app/";

export const getUserAuthorization = async () => {
  try {
    const authorizationEndpoint = "https://accounts.spotify.com/authorize";
    const queryParams = new URLSearchParams({
      client_id: clientId,
      response_type: "code",
      redirect_uri: redirectUri,
      scope: scopes.join(" "),
    });

    const authorizationURL = `${authorizationEndpoint}?${queryParams}`;

    window.location.href = authorizationURL;
  } catch (err) {
    console.log(err, "Error in getUserAuthorization");
  }
};

export const getVerificationToken = async (code: string) => {
  try {
    const tokenEndpoint = "https://accounts.spotify.com/api/token";

    const requestBody = new URLSearchParams();
    requestBody.append("grant_type", "authorization_code");
    requestBody.append("code", code || "");
    requestBody.append("redirect_uri", redirectUri);

    const authString = `${clientId}:${clientSecret}`;
    const base64AuthString = btoa(authString);
    const headers = {
      Authorization: `Basic ${base64AuthString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    };

    const response = await axios.post(tokenEndpoint, requestBody, {
      headers: headers,
    });

    const { access_token, refresh_token } = response.data;

    store.dispatch(UpdateToken(access_token));
    const one = await getUserFollowingList();
    const two = await getUserProfileData();
    const three = await getUserTopItems();
    if (one && two && three) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    console.error("Error:", error);
    return null;
  }
};

export const getUserProfileData = async () => {
  try {
    const { accessToken } = store.getState().UpdateTokenReducer;

    const { data }: UserDetailsResponse = await axios.get(
      "https://api.spotify.com/v1/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    let userDetails = {
      country: data.country,
      display_name: data.display_name,
      email: data.email,
      explicit_content: !data.explicit_content.filter_enabled,
      url: data.href,
      followers: data.followers.total,
      product: data.product,
    };

    await store.dispatch(UpdateUserDetails(userDetails));
    return true;
  } catch (err) {
    console.log(err, "Error in getUserProfileData");
  }
};

export const getUserFollowingList = async () => {
  try {
    const { accessToken } = store.getState().UpdateTokenReducer;

    const { data }: UserFollowingResponse = await axios.get(
      "https://api.spotify.com/v1/me/following?type=artist",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const { artists } = data;

    await store.dispatch(UpdateUserFollowing(artists.items));
    return true;
  } catch (err) {
    console.log(err, "Error in getUserFollowingList");
  }
};

export const getUserTopItems = async () => {
  try {
    const { accessToken } = store.getState().UpdateTokenReducer;

    const tracksType = "tracks";
    const artistsType = "artists";

    const tracksResponse = await axios.get(
      `https://api.spotify.com/v1/me/top/${tracksType}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const artistsResponse = await axios.get(
      `https://api.spotify.com/v1/me/top/${artistsType}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const trackItems = tracksResponse.data.items;
    const artistItems = artistsResponse.data.items;

    await store.dispatch(UpdateTopItems(trackItems, "tracks"));
    await store.dispatch(UpdateTopItems(artistItems, "artists"));

    // Further actions with the user's top items
    return true;
  } catch (error) {
    console.error("Error fetching user top items:", error);
  }
};
