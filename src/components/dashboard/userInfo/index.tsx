import { useEffect, useState } from "react";
import store from "../../../redux/store";

const UserInfo = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const userDetails = store.getState().UpdateUserDetailsReducer;

    setName(userDetails.display_name);
  }, []);

  return (
    <div className="container text-light border">
      <h1>Logged in as: {name}</h1>
    </div>
  );
};

export default UserInfo;
