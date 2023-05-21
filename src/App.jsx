import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/home"
import AboutMePage from "./pages/about-me"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </div>
  )
}

export default App
