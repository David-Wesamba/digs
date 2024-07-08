import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import AboutMembers from './components/AboutMembers';
import Services from './components/Services';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './style.css'; // Ensure to copy your style.css into src directory


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <AboutMembers />
      <Services />
      <Skills />
      <Contact />
      <Testimonials />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;