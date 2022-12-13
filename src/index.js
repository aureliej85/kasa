import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>
);
