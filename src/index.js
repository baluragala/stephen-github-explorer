import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { githubWatcher } from "./sagas";
import reducer from "./reducers";
import { createLogger } from "redux-logger";

import { Provider } from "react-redux";
let sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(createLogger(), sagaMiddleware)
);

sagaMiddleware.run(githubWatcher);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
