import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemedSuspense from "./components/ThemedSuspense";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("admin"));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<ThemedSuspense />}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>
);
