import React, { useEffect, useState } from "react";
import "./LoginForm.css"; // Import CSS for styling
import logo from '../tempLogoImage.jpg';
import { globalState, updateGlobalState } from "../global.js";

const LoginForm = ({ onLogin }) => {
  const [backendData, setBackendData] = useState([{}])

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let usernameFound = false;

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])

  const handleCreate = () => {
    alert("Creating new user with username lol " + username + " and password " + password + ".");
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Logging in with:", { username, password });

    backendData.users.map((user, i) => {

      console.log("Password correct! Logging in...");
      globalState.username = username;
      globalState.isLoggedIn = true;
      updateGlobalState(username, true);
      onLogin();

      // if (username === user) {
      //   usernameFound = true;
      //   console.log("Username found!");
      //   if (password === "admin") {
      //     console.log("Password correct! Logging in...");
      //     globalState.username = username;
      //     globalState.isLoggedIn = true;
      //     updateGlobalState(username, true);
      //     onLogin();
      //   } else {
      //     alert("Invalid credentials. Logging into dev_test.");
      //     globalState.username = username;
      //     globalState.isLoggedIn = true;
      //     updateGlobalState(username, true);
      //     onLogin();
      //   }
      // }
      // else {
      //   alert("creating account");
      //   usernameFound = true;
      //   console.log("Username found!");
      //   if (password === "admin") {
      //     console.log("Password correct! Logging in...");
      //     globalState.username = username;
      //     globalState.isLoggedIn = true;
      //     updateGlobalState(username, true);
      //     onLogin();
      //   } else {
      //     alert("Invalid credentials. Logging into dev_test.");
      //     globalState.username = username;
      //     globalState.isLoggedIn = true;
      //     updateGlobalState(username, true);
      //     onLogin();
      //   }
      // }
    })

    if (!usernameFound) {
      alert("Creating account.");
    }
  };

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true); // Toggle between register/login
  const [message, setMessage] = useState(''); // For displaying messages (errors, success)

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setMessage(''); // Clear any previous messages

  //   const endpoint = isRegistering ? '/register' : '/login';

  //   try {
  //     const response = await fetch(endpoint, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.message || 'Authentication failed'); // Handle backend errors with message
  //     }

  //     if (isRegistering) {
  //       setMessage('Registration successful. Please login.');
  //       setIsRegistering(false); // Switch to login form
  //     } else {
  //       localStorage.setItem('token', data.token); // Store the token
  //       // Redirect or update state to reflect logged-in status
  //       window.location.href = "/"; // Example of redirect to home page "/"
  //     }
  //   } catch (error) {
  //     console.error('Authentication error:', error);
  //     setMessage(error.message); // Display error message to the user
  //   }
  // };

  const handleCancel = () => {
    updateGlobalState("temp", false);
    console.log("global val: " + globalState.increment);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login Form</h2>
      <form>
        <div className="imgcontainer">
          <img src={logo} alt="Avatar" className="avatar" />
        </div>

        <div className="container">
          <label><b>Username</b></label>
          <input 
            type="text" 
            placeholder="Enter Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required 
          />

          <label><b>Password</b></label>
          <input 
            type="password" 
            placeholder="Enter Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />

          <button type="submit" onClick={handleSubmit}>Login</button>
          {/* <button type="create" onClick={handleCreate}>Create Account</button> */}
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <div className="container footer">
          <button type="button" className="cancelbtn" onClick={handleCancel}>Cancel</button>
          {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
