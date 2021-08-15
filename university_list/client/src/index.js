import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from './store'
import { Provider } from 'react-redux'
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
