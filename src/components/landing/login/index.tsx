import { getUserAuthorization } from "../../../utilities/spotifyFunctions";

const LoginComponent = () => {
  return (
    <div className="container d-flex vh-custom align-items-center justify-content-center flex-column">
      <p className="fs-3 loginText">Press Me 👇</p>
      <button
        type="button"
        className="btn btn-success fw-bold py-3 mb-5 w-50"
        onClick={() => getUserAuthorization()}
      >
        LOGIN
      </button>
    </div>
  );
};

export default LoginComponent;
