import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReactGA from "react-ga4";

ReactGA.initialize("G-DPB5MQW43J");

ReactGA.send({ hitType: "pageview", page: window.location.pathname, });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
