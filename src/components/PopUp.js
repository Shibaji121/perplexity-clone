import React from "react";
import "../styles/popup.css";

export default function PopUp(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={props.handleClose}>
          &times;
        </span>
        <p>Some text in the Modal..</p>
        <p>Some text in the Modal..</p>
        <p>Some text in the Modal..</p>
        <p>Some text in the Modal..</p>
        <p>Some text in the Modal..</p>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}
