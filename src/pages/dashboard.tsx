import { useEffect, useState } from "react";
import UserInfo from "../components/dashboard/userInfo";
import store from "../redux/store";

const Dashboard = () => {
  const [trackList, setTrackList] = useState<any>([]);
  const [artistList, setArtistList] = useState<any>([]);
  const [following, setFollowing] = useState<any>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const userDetails = store.getState().UpdateUserDetailsReducer;
    const userFollowing = store.getState().UpdateUserFollowingReducer;
    const { artists, tracks } = store.getState().UpdateTopItemsReducer;

    setTrackList(tracks);
    setArtistList(artists);
    setFollowing(userFollowing.data);
    setName(userDetails.display_name);

    console.log(userDetails, "userDetails");
    console.log(userFollowing, "userFollowing");
    console.log(artists, "artists");
    console.log(tracks, "tracks");
  }, []);

  return (
    <div className="container text-light">
      <UserInfo name={name} />

      <div className="row">
        <div className="col">Top Tracks:</div>
        <div className="col">Top Artists:</div>
        <div className="col d-none d-md-block">Following:</div>
      </div>

      <div className="row ">
        <div className="col">
          {" "}
          <ol>
            {trackList.map((track: any) => {
              return (
                <li>
                  {/* <img src={track.url} /> */}
                  <p>
                    {track.name} - {track.artist}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="col">
          {" "}
          <ol>
            {artistList.map((artist: any) => {
              return (
                <li>
                  {/* <img src={artist.url} /> */}
                  <p>{artist.name}</p>
                </li>
              );
            })}
          </ol>
        </div>
        <div className="col d-none d-md-block">
          {" "}
          <ol>
            {following.map((artist: any) => {
              return (
                <li>
                  {/* <img src={artist.url} /> */}
                  <p>{artist.name}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
