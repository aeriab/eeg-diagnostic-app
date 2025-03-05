import React, { use, useEffect, useState } from 'react'
import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage';
import { globalState, updateGlobalState } from "./global.js";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize with false

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setBackendData(data))
  }, [])

  const handleLogin = () => {
    setIsLoggedIn(true); // This will trigger a re-render
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // This will trigger a re-render
  };

  return (
    <>
      {isLoggedIn ? (
        <HomePage onLogout={handleLogout}/>
      ) : (
        <LoginForm onLogin={handleLogin}/>
      )}
    </>
  );
}

export default App