import React from "react";
import { ReactComponent as SearchIcon } from "../static/SearchIcon.svg";
import { ReactComponent as Plus } from "../static/plus.svg";
import { ReactComponent as RightArrow } from "../static/rightarrow.svg";
import { ReactComponent as RoundRight } from "../static/roundright.svg";
import { Link } from "react-router-dom";

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
    <div>
      <div className="home-page">
        <div className="header">
          <h1>Where knowledge begins</h1>
          <div>
            <div>
              <textarea />
            </div>
            <div>
              <div>
                <Link to="/">
                  <SearchIcon className="icon" />
                  Focus
                </Link>
                <Link to="/">
                  <Plus className="icon" />
                  File
                </Link>
              </div>
              <div>
                <Link to="/">
                  <div>
                    <div></div>
                  </div>
                  Copilot
                </Link>
                <Link to="/">
                  <RightArrow className="icon" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <RoundRight className="icon" />
              Try asking
            </div>
            <div className="extra-links">
              {extraLinkData.map((data) => {
                return <Link to="/">{data} </Link>;
              })}
            </div>
          </div>
        </div>
        <div className="footer">
          <div>
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
