import React, { useEffect, useState } from "react";
import { globalState, updateGlobalState } from "../global.js";

const HomePage = ({ onLogout }) => {
  const [backendData, setBackendData] = useState([{}])

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let usernameFound = false;

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])

  const handleLogout = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Logging out...");
    globalState.username = "";
    globalState.isLoggedIn = false;
    updateGlobalState("", false);
    onLogout();
};

  return (
    <div className="login-container">
      <h2>Home Page</h2>
      <button type="logout" onClick={handleLogout}>Log out</button>
      <form>

        <div className="container">
          <label><b>Username: </b></label>
          <span>{globalState.username}</span>
        </div>
        <div className="container">
          <h1>Welcome to our EMA web app !! This is currently under construction.</h1>
        </div>
      </form>
    </div>
  );
};

export default HomePage;