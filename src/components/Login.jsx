import { useContext, useState } from "react";
import UserContext from "../context/UserContext.js";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { login, user } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      return;
    }
    login({ username, password });
  };

  if (user) {
    return <div></div>;
  }
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        style={{ marginLeft: "10px" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button style={{ marginTop: "10px" }} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Login;
