import HeaderText from "../components/landing/headerText";
import LoginComponent from "../components/landing/login";
import SmallInfo from "../components/landing/smallInfo";

const LandingPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-between flex-column text-center text-light h-100">
      <HeaderText />
      <LoginComponent />
      <SmallInfo />
    </div>
  );
};

export default LandingPage;
