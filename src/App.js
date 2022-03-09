import React from "react";
import Home from "./Home";
import { Routes,Route } from "react-router-dom";
import Contact from "./Contact";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Service from "./Pages/Service";
const App=()=>{
  return(
    <>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route element={<Error/>} />
        </Routes>
    </>
  )
}
export default App;