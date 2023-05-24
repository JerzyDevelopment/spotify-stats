import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/landing";
import {
  getUserAuthorization,
  getUserProfileData,
  getVerificationToken,
} from "./utilities/spotifyFunctions";
import store from "./redux/store";
import { Provider } from "react-redux";
import Dashboard from "./pages/dashboard";

function App() {
  const [code, setCode] = useState<string>("");
  const [loaded, setLoaded] = useState<any>(false);

  useEffect(() => {
    if (window.location.search.includes("code")) {
      const urlParams = new URLSearchParams(window.location.search);
      const authorizationCode = urlParams.get("code");
      setCode(authorizationCode!);
      getVerificationToken(authorizationCode!).then((res: any) => {
        setLoaded(res);
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <div className="App container-fluid bg-dark bg-gradient  vh-100 py-5 overflow-scroll">
        {loaded ? <Dashboard /> : <LandingPage />}
      </div>
    </Provider>
  );
}

export default App;
