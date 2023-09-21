import React from "react";
import { ReactComponent as SearchIcon } from "../static/SearchIcon.svg";
import { ReactComponent as Plus } from "../static/plus.svg";
import { ReactComponent as RightArrow } from "../static/rightarrow.svg";
import { ReactComponent as RoundRight } from "../static/roundright.svg";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";

const extraLinkData = [
  "history Of Argentina",
  "unique colorado flowers",
  "checkout time w hotel cdmx",
  "how to center a div",
  "brown dog name ideas",
  "healthy restaurants in sf",
  "d/dx x^2 y^4, d/dy x^2 y^4",
];

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="home-page">
        <div className="header-container">
          <div className="header">
            <h1>Where knowledge begins</h1>
            <div className="input-container">
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
            <div className="suggestions">
              <div className="asking">
                <RoundRight className="icon" />
                Try asking
              </div>
              <div className="extra-links">
                {extraLinkData.map((data, index) => {
                  return (
                    <Link key={index} to="/">
                      {data}{" "}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-links">
            <Link to="/">Try Pro</Link>
            <Link to="/">Careers</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Labs</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
