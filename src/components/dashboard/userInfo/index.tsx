const UserInfo = ({ name }: any) => {
  return (
    <div className="container text-light border">
      <h1>Logged in as: {name}</h1>
    </div>
  );
};

export default UserInfo;
