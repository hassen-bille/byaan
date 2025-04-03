import { Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import AboutSection from "./pages/about"


const App = ()=>{
  return <div>
    <Routes >
      <Route path="/home" element= {<Home />} />
      <Route path="/about" element= {<AboutSection />} />
    </Routes>
  </div>
}

export default App