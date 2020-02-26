import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App";
import configureStore from "./configureStore";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <Route path="/walls/:wallName?" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
