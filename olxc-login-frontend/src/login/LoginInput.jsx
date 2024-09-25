import React from 'react';
import './css/LoginInput.css';
import { useState } from 'react';

function LoginInput() {
     
  const [inputPassword, setPassword] = useState('');
  const [inputUsername, setUsername] = useState('');

    const handleLoginClick = () => {
      const apiUrl = 'http://localhost:8080/login';

      fetch(apiUrl, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify ({
            username: inputUsername,
            password: inputPassword
          })
      });
    };

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);  // Update the state with the input value
    };

    const handleUsernameChange = (event) => {
      setUsername(event.target.value);  // Update the state with the input value
    };

    return (
      <>
       <input 
        className="login-username-input"
        type="text"
        value={inputUsername}
        onChange={handleUsernameChange}
        placeholder="Username"
      >
      </input>
      <input
        type="password"
        className="login-input-password"
        value={inputPassword}
        onChange={handlePasswordChange}
        placeholder="Password"
       />
       <button type="button" className="login-button" onClick={handleLoginClick}>
           Login
       </button>
       </>
    );
}

export default LoginInput;


