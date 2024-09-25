import React from 'react';
import './css/Password.css';

function Password() {
    const handleLoginClick = () => {
      const apiUrl = 'http://localhost:8080/test';

      fetch(apiUrl, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error('Login failed');
          }
          return response.json();
      })
      .then((data) => {
          console.log('Login successful', data);
      })
      .catch((error) => {
          console.error('Error during login:', error);
      });
    };

    return (
      <>
      <input
        type="password"
        className="login-input-password"
        placeholder="Password"
       />
       <button type="button" className="login-button" onClick={handleLoginClick}>
           Login
       </button>
       </>
    );
}

export default Password;
