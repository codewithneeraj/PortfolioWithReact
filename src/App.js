import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
// import Cursor from './Components/Cursor';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact'

function App() {
  return (
    <Router>
      <Header />
      {/* <Cursor /> */}
      <Routes>
        <Route path="/" element={ <Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
