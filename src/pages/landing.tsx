import HeaderText from "../components/landing/headerText";
import LoginComponent from "../components/landing/login";

const LandingPage = () => {
  return (
    <div className="d-flex align-items-center flex-column text-center text-light">
      <HeaderText />
      <LoginComponent />
    </div>
  );
};

export default LandingPage;
