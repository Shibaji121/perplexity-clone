import React from "react";
import { ReactComponent as SearchIcon } from "../static/SearchIcon.svg";
import { ReactComponent as Plus } from "../static/plus.svg";
import { ReactComponent as RightArrow } from "../static/rightarrow.svg";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

export default function NewThread() {
  return (
    <div className="input-container" style={{ width: "50vw" }}>
      <div className="text-area">
        <textarea placeholder="Ask anything..." />
      </div>
      <div className="buttons-icons">
        <div className="left-button-icons">
          <Link to="/">
            <SearchIcon className="icon" />
            Focus
          </Link>
          <Link to="/">
            <Plus className="icon" />
            File
          </Link>
        </div>
        <div className="right-button-icons">
          <Link
            to="/"
            title="Ctrl + . Use Copilot for more comprehensive answers."
          >
            <div className="slider">
              <div className="slider-thumb"></div>
            </div>
            Copilot
          </Link>
          <Link
            to="/"
            style={{
              borderRadius: "50%",
              background: "#e8e8e3",
              padding: "5px",
            }}
          >
            <RightArrow className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
