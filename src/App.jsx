import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/footer"
import Home from "./pages/home"
import About from "./pages/about"
import Tour from "./pages/tour"
import Contact from "./pages/contact"
import Submitted from "./pages/submitted"
import Booking from "./pages/booking"
import Services from "./pages/service"
import Error from "./pages/404err"

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
          <Route path="/booking" element={<Booking/>}/> 
          <Route path="/services" element={<Services/>}/>
          <Route path="/404error" element={<Error/>}/>       
        </Routes>

        <Footer/>
      </Router>
    </>
  )
}
