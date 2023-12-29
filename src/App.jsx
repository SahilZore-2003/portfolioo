import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import {Footer, Navbar } from "./Components"
import { useState } from "react"
import ContactUs from "./Pages/ContactUs/ContactUs"

function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
