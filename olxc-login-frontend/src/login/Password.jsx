import './css/Password.css';

function Password() {
    return (
      <>
      <input
        type="password"
        className="login-input-password"
        placeholder="Password"
       />
       <button type="submit" className="login-button">Login</button>
       </>
      );
}

export default Password