import { useEffect, useState } from "react";
import store from "../../../redux/store";

const TopArtists = () => {
  const [artists, setArtists] = useState<any[]>([]);

  useEffect(() => {
    const { artists } = store.getState().UpdateTopItemsReducer;
    setArtists(artists);
  }, []);

  return (
    <div className="tracks-div d-flex overflow-scroll mt-1">
      {artists.map((artist: any, index: number) => {
        return (
          <div
            className="border border-light rounded song-div ms-5"
            onClick={() => window.open(artist.url, "_blank")}
          >
            <img className="track-image mb-3" src={artist.image} />
            <p className="fs-4 m-0">{artist.name}</p>

            <p className="fw-bold fs-3">{index + 1}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TopArtists;
