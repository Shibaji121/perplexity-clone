import React from "react";
import "../styles/popup.css";

export default function PopUp({ handleClose, children }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
}
