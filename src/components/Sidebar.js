import React, { useState } from "react";
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

export default function SideBar() {
  const [isloginClick, setIsloginClick] = useState(false);
  const handleClose = () => {
    setIsloginClick(false);
  };
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
            <div className="option">
              <Link to="/" onClick={() => setIsloginClick(true)}>
                <LoginIcon className="icon" />
                Login
              </Link>
            </div>
          </div>
          <button className="sign-up">Sign Up</button>
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
      {isloginClick && (
        <PopUp handleClose={handleClose}>
          <Login />
        </PopUp>
      )}
    </>
  );
}
