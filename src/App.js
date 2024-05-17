import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/footer';
import Main from './components/main';
import About from './components/About';
import Services from './components/Services';
import ScrollToTopOnMount from './components/ScrollTop'

function App() {
  return (
    <Router>
      <div>
        <Navbar className="fixed top-0 left-0 w-full z-50" />
        <ScrollToTopOnMount />
        <Routes>
        
          <Route path="/" element={<Home />} />
          <Route path ="/contact" element={<Main/>}/>
          <Route path ="/about" element={<About/>}/>
          <Route path ="/services" element={<Services/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
