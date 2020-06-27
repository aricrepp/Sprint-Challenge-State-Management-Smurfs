import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/reducer";
import { Provider } from "react-redux";

const logger = ({ getState }) => next => action => {
    console.log("Dispatching action:", action);
    next(action);
  };
  
  let store = createStore(reducer, applyMiddleware(logger, thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root")
    );
