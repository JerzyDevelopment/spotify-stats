import { useEffect, useState } from "react";
import store from "../../../redux/store";

const TopSongs = () => {
  const [songs, setSongs] = useState<any[]>([]);

  useEffect(() => {
    const { tracks } = store.getState().UpdateTopItemsReducer;
    setSongs(tracks);
  }, []);

  return (
    <div className="tracks-div d-flex overflow-scroll mt-1">
      {songs.map((song: any, index: number) => {
        return (
          <div
            className="border border-light rounded song-div ms-5"
            onClick={() => window.open(song.url, "_blank")}
          >
            <img className="track-image mb-3" src={song.image} />
            <p className="fs-4">
              {song.name} - <span className="fw-bold">{song.artist}</span>
            </p>

            <p className="fw-bold fs-3">{index + 1}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TopSongs;
