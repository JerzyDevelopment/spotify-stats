import TopArtists from "../components/dashboard/topArtists";
import TopSongs from "../components/dashboard/topSongs";
import UserInfo from "../components/dashboard/userInfo";

const DashboardPage = () => {
  return (
    <div className="container-lg d-flex flex-column align-items-center">
      {/* <UserInfo /> */}
      <h1 className="mt-3">Your top 20 songs:</h1>
      <TopSongs />
      <h1 className="mt-3">Your top 20 artists:</h1>
      <TopArtists />
    </div>
  );
};

export default DashboardPage;
