import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/home"
import AboutMePage from "./pages/about-me"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-me" element={<AboutMePage />} />
    </Routes>
  )
}

export default App
