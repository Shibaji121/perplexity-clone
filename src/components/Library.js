import React from "react";
import { ReactComponent as BigLibraryIcon } from "../static/bigLibrary.svg";
import { ReactComponent as SearchIcon } from "../static/SearchIcon.svg";
import { ReactComponent as ThreadIcon } from "../static/threads.svg";
import { ReactComponent as ThreeDot } from "../static/threedot.svg";
import { ReactComponent as PlusIcon } from "../static/plus.svg";
import { ReactComponent as CollectionIcon } from "../static/collections.svg";
import "../styles/Library.css";

export default function Library() {
  return (
    <div className="library-container">
      <div className="library-header">
        <div className="heading-container">
          <BigLibraryIcon className="big-l-icon" />
          <div>Library</div>
        </div>
        <div className="inputs-container">
          <SearchIcon className="icon" />
          <input
            type="text"
            className="search-thread"
            placeholder="Search your threads"
          />
        </div>
      </div>
      <div className="body-section">
        <div className="threads">
          <div className="threads-top">
            <div className="threads-top-left flex-row">
              <ThreadIcon className="icon" />
              <div>Threads</div>
            </div>
            <div className="threads-top-right">
              <div>
                <ThreeDot className="icon" />
              </div>
              <div>
                <PlusIcon className="icon" />
              </div>
            </div>
          </div>
          <hr />
          <div className="all-threads">No threads yet</div>
        </div>
        <div className="collections">
          <div className="collection-header">
            <div className="collection-heading">
              <CollectionIcon className="icon" />
              <div>Collections</div>
            </div>
            <div className="plus-icon">
              <PlusIcon className="icon" />
            </div>
          </div>
          <hr />
          <div className="organise">
            <div>Organise your threads or collaborate with others</div>
            <div>
              <button className="get-start">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
