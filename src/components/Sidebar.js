import React from "react";
import "../styles/sidebar.css";
import { ReactComponent as Logo } from "../static/logo.svg";
import { ReactComponent as SearchIcon } from "../static/SearchIcon.svg";
import { ReactComponent as Discover } from "../static/discover.svg";
import { ReactComponent as Library } from "../static/library.svg";
import { ReactComponent as Login } from "../static/login.svg";
import { ReactComponent as Arrow } from "../static/uparrow.svg";
import { ReactComponent as Mobile } from "../static/mobile.svg";
import { ReactComponent as Xtwiter } from "../static/x-twitter.svg";
import { ReactComponent as Discord } from "../static/discord.svg";

export default function SideBar() {
  return (
    <div className="sider-bar">
      <div className="top-sideBar">
        <div className="logo">
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className="new-thread flex-row">
          <div>New Thread</div>
          <div className="btn">Ctrl</div>
          <div className="btn">I</div>
        </div>
        <div className="nav-options">
          <div className="option">
            <a href="/">
              <SearchIcon className="icon" />
              Home
            </a>
          </div>
          <div className="option">
            <a href="/">
              <Discover className="icon" />
              Discover
            </a>
          </div>
          <div className="option">
            <a href="/">
              <Library className="icon" />
              Library
              <div className="new">NEW</div>
            </a>
          </div>
          <div className="option">
            <a href="/">
              <Login className="icon" />
              Login
            </a>
          </div>
        </div>
        <button>Sign Up</button>
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
            <a href="/">
              <Mobile className="icon" />
              Download
            </a>
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
  );
}
