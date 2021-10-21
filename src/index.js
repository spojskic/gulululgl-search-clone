import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ResultContextProvider } from "./contexts/ResultsContextProvider";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <ResultContextProvider>
    <Router>
      <App />
    </Router>
  </ResultContextProvider>,

  document.getElementById("root")
);
