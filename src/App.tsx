import { useEffect, useState } from "react";
import "./App.css";
import LandingPage from "./pages/landing";
import { getVerificationToken } from "./utilities/spotifyFunctions";
import store from "./redux/store";
import { Provider } from "react-redux";

import DashboardPage from "./pages/dashboard";
import LoadingPage from "./pages/loading";

function App() {
  const [code, setCode] = useState<string>("");
  const [page, setPage] = useState<"signIn" | "loading" | "loaded">("signIn");

  useEffect(() => {
    if (window.location.search.includes("code")) {
      setPage("loading");
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get("code");
      setCode(authorizationCode!);
      getVerificationToken(authorizationCode!).then((res: any) => {
        setPage("loaded");
      });
    }
  }, []);

  const pageObj: {
    [key: string]: JSX.Element;
  } = {
    signIn: <LandingPage />,
    loading: <LoadingPage />,
    loaded: <DashboardPage />,
  };

  return (
    <Provider store={store}>
      <div className="App container-fluid bg-dark bg-gradient  vh-100 py-5">
        <div className="d-flex align-items-center flex-column text-center text-light h-100">
          {pageObj[page]}
        </div>
      </div>
    </Provider>
  );
}

export default App;
