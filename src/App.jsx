import "./App.css";
import UserProvider from "./context/UserProvider.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";

function App() {
  return (
    <UserProvider>
      <h1>React with Chai</h1>
      <Login />
      <Profile />
    </UserProvider>
  );
}

export default App;
