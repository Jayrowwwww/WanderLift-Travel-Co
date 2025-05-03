import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/footer"
import Home from "./pages/home"
import About from "./pages/about"
import Tour from "./pages/tour"
import Contact from "./pages/contact"
import Submitted from "./pages/submitted"

export default function App() {


  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/tour" element={<Tour/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/submitted" element={<Submitted/>}/>
        </Routes>

        <Footer/>
      </Router>
    </>
  )
}
