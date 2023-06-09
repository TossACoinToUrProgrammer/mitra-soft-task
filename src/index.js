import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"
import App from "./App"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
