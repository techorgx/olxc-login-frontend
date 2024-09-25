import LoginInput from "./LoginInput";
import "./css/LoginForm.css"

function LoginForm() {
    return (
        <div className="login-form-container">
            <form className="login-form">
                 <LoginInput></LoginInput>
            </form>
        </div>
    );
}

export default LoginForm