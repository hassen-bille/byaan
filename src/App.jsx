import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import AboutSection from "./pages/about"
import Header from "./pages/header"
import Contact from "./pages/contact"


const App = ()=>{
  return <div>
    <Routes >
      <Route path="/" element= {<Home />} />
      <Route path="/about" element= {<AboutSection />} />
      <Route path="/contact" element= {<Contact />} />
      
    </Routes>
  </div>
}

export default App