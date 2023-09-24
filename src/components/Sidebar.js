import React, { useContext, useEffect, useState } from "react";
import "../styles/sidebar.css";
import { ReactComponent as Logo } from "../static/logo.svg";
import { ReactComponent as SearchIcon } from "../static/SearchIcon.svg";
import { ReactComponent as Discover } from "../static/discover.svg";
import { ReactComponent as Library } from "../static/library.svg";
import { ReactComponent as LoginIcon } from "../static/login.svg";
import { ReactComponent as Arrow } from "../static/uparrow.svg";
import { ReactComponent as Mobile } from "../static/mobile.svg";
import { ReactComponent as Xtwiter } from "../static/x-twitter.svg";
import { ReactComponent as Discord } from "../static/discord.svg";
import { Link, Outlet } from "react-router-dom";
import PopUp from "./PopUp";
import Login from "./Login";
import { Context } from "./MyContext";

export default function SideBar() {
  const [user, setUser] = useState({});
  const context = useContext(Context);

  useEffect(() => {
    if (Object.keys(context.tokenResponse).length !== 0) {
      fetch(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${context.tokenResponse.access_token}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((user) => {
          console.log(user);
          setUser(user);
        })
        .catch((error) => {
          console.error("Error fetching user info:", error);
        });
    }
  }, [context]);

  return (
    <>
      <div className="sider-bar">
        <div className="top-sideBar">
          <div className="logo">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="new-thread flex-row">
            <div>New Thread</div>
            <div className="btn">Ctrl</div>
            <div className="btn">I</div>
          </div>
          <div className="nav-options">
            <div className="option">
              <Link to="/">
                <SearchIcon className="icon" />
                Home
              </Link>
            </div>
            <div className="option">
              <Link to="/">
                <Discover className="icon" />
                Discover
              </Link>
            </div>
            <div className="option">
              <Link to="/">
                <Library className="icon" />
                Library
                <div className="new">NEW</div>
              </Link>
            </div>
            {Object.keys(context.tokenResponse).length === 0 && (
              <div className="option">
                <Link to="/" onClick={context.openLoginPop}>
                  <LoginIcon className="icon" />
                  Login
                </Link>
              </div>
            )}
          </div>
          {Object.keys(context.tokenResponse).length === 0 && (
            <button className="sign-up" onClick={context.openLoginPop}>
              Sign Up
            </button>
          )}
        </div>
        <div className="bottom-sideBar">
          <div style={{ padding: "0px 16px 8px" }}>
            <div style={{ color: "#1e3d44" }}>Try Pro</div>
            <div>
              Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and upload
              more files.
            </div>
            <div>
              <div className="flex-row learn-more">
                <Arrow className="icon" />
                Learn More
              </div>
            </div>
            {Object.keys(context.tokenResponse).length !== 0 && (
              <div className="flex-row" style={{ gap: "10px" }}>
                <img className="user-image" src={user.picture} alt="user-img" />
                <h3 style={{ color: "#13343b", margin: "0" }}>{user.name}</h3>
              </div>
            )}
          </div>
          <div className="flex-row download">
            <div>
              <Link to="/">
                <Mobile className="icon" />
                Download
              </Link>
            </div>
            <div>
              <Xtwiter className="icon" />
            </div>
            <div>
              <Discord className="icon" />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
      {context.isloginClick && (
        <PopUp handleClose={context.closeLoginPop}>
          <Login />
        </PopUp>
      )}
    </>
  );
}
