import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import reducers from "./redux/reducers";
import App from "./App";

//const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(<App />, document.getElementById("root"));
