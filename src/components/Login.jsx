import React from "react";
import './Login.css'

const Login = () => {
  return (
    <div>
      <div className="login-card">
        <h2>Login</h2>
        <h3>Enter your credentials</h3>

        <form action="#" className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <a href="#">Forget your password</a>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
