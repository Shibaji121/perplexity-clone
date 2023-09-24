import React from "react";
import { ReactComponent as Google } from "../static/google.svg";
import { ReactComponent as Apple } from "../static/apple.svg";
import { Link } from "react-router-dom";
import "../styles/Login.css";
import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className="login-container">
      <h1>Welcome</h1>
      <div style={{ color: "#13343b", margin: "8px 0 16px 0px" }}>
        Sign in or sign up to continue
      </div>
      <button className="login-btns" onClick={() => login()}>
        <Link to="/">
          <Google className="icon" />
          Continue with Google
        </Link>
      </button>
      <button className="login-btns">
        <Link to="/">
          <Apple className="icon" />
          Continue with Apple
        </Link>
      </button>
      <hr />
      <input type="email" placeholder="henry@example.com" />
      <div className="c-with-email">Continue with Email</div>
    </div>
  );
}
