import React from "react";
import { ReactComponent as HeadIcon } from "../static/manhead.svg";
import { ReactComponent as HeartIcon } from "../static/heart.svg";
import { ReactComponent as ThreeDot } from "../static/threedot.svg";
import { ReactComponent as LinkIcon } from "../static/linkIcon.svg";
import { ReactComponent as ShareIcon } from "../static/shareIcon.svg";
import { ReactComponent as StraightUp } from "../static/straightUpArrow.svg";
import { Link } from "react-router-dom";
import "../styles/Search.css";

export default function Search() {
  return (
    <div className="search-container">
      <div className="search-header">
        <div className="left-search-header flex-row">
          <HeadIcon className="icon" />
          <div>Anonymous</div>
          <HeartIcon className="icon" />
          <div>Like</div>
        </div>
        <div className="right-search-header flex-row">
          <ThreeDot className="icon" />
          <LinkIcon className="icon blue-icon" />
          <div className="share flex-row">
            <ShareIcon className="icon" />
            <div>Share</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="search-body">
        <h1>Test Thread</h1>
        <div className="ask-follow">
          <input type="text" placeholder="Ask follow-up..." />
          <div className="flex-row" style={{ gap: "8px" }}>
            <Link
              className="flex-row"
              to="/"
              title="Ctrl + . Use Copilot for more comprehensive answers."
            >
              <div className="slider">
                <div className="slider-thumb"></div>
              </div>
              Copilot
            </Link>
            <div className="up-icon">
              <StraightUp className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
