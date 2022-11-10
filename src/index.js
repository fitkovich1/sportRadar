import React from "react";
import FootballBoard from "./components/FootballBoard";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <FootballBoard />
  </Provider>
);
