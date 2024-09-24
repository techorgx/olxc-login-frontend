import Password from "./Password";
import Username from "./Username";
import "./css/LoginForm.css"

function LoginForm() {
    return (
        <div className="login-form-container">
            <form className="login-form">
                 <Username></Username>
                 <Password></Password>
            </form>
        </div>
    );
}

export default LoginForm