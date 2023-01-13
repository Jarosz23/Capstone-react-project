import './App.css'

import { Route, Routes } from "react-router-dom"

import Cart from "./pages/Cart"
import Header from "./components/Header"
import Photos from "./pages/Photos"

function App() {
  return (
    <div className="app-container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Photos />}>
        </Route>

        <Route path="/cart" element={<Cart />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
