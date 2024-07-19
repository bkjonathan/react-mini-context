import { useContext } from "react";
import UserContext from "../context/UserContext.js";

const Profile = () => {
  const { user, logout } = useContext(UserContext);
  if (!user) {
    return <div>Not logged in</div>;
  }
  return (
    <div>
      <div>Welcome: {user.username}</div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Profile;
