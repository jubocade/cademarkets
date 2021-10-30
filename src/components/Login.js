import React from 'react';
import "../styles/Login.css";

const Login = () => {
    return (
        <div className="login">
            <h1>Log In</h1>
            <div className="login-container">
                <form action="#">
                    <div className="email-container">
                        <div className="label-container">
                            <label htmlFor="email-login">Email:</label>
                        </div>
                        <div className="input-container">
                            <input type="email" id="email-login"/>
                        </div>
                    </div>
                    <div className="password-container">
                        <div className="label-container">
                            <label htmlFor="password-login">Password:</label>
                        </div>
                        <div className="input-container">
                            <input type="password" id="password-login"/>
                        </div>
                    </div>
                    <div className="login-button-container">
                        <input type="submit" value="Log In"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
