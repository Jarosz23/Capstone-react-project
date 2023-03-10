import App from './App'
import { ContextProvider } from "./Context"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.createRoot(
  document.getElementById("root")).render(
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  )

