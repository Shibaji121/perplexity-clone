import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import MyContext from "./components/MyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyContext>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_client_id}>
        <App />
      </GoogleOAuthProvider>
    </MyContext>
  </React.StrictMode>
);
