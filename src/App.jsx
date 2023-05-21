import { Route, Routes } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/home"
import AboutMePage from "./pages/about-me"
import Navbar from "./components/navbar/Navbar"
import UserPage from "./pages/user-page"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/user/:userId" element={<UserPage />} />
      </Routes>
    </div>
  )
}

export default App
