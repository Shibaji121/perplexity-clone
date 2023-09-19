import React from "react";
import "../styles/sidebar.css";
import logo from "../static/logo.svg";
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
      <div>
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <div className="new-thread">
          <div>New Thread</div>
          <div>Ctrl</div>
          <div>I</div>
        </div>
        <div>
          <div>
            <SearchIcon className="icon" />
            <div>Home</div>
          </div>
          <div>
            <Discover className="icon" />
            <div>Discover</div>
          </div>
          <div>
            <Library className="icon" />
            <div>Library</div>
            <div>New</div>
          </div>
          <div>
            <Login className="icon" />
            <div>Login</div>
          </div>
        </div>
        <button>Sign Up</button>
      </div>
      <div>
        <div>
          <div>Try Pro</div>
          <div>
            Upgrade to Claude-2 or GPT-4, boost your Copilot uses, and upload
            more files.
          </div>
          <div>
            <Arrow className="icon" />
            <div>Learn More</div>
          </div>
        </div>
        <div>
          <div>
            <Mobile className="icon" />
            <div>Download</div>
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
