import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Prices from './components/prices';
import Projects from './components/projects';
import Contact from './components/contact';
import './index.css';

const Home = () => {
  return (
    <div className="min-h-screen bg-base-200 p-6">
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-5xl font-bold text-primary bg-black mb-4">Hello, I'm mitsch01</h1>
    <p className="text-xl text-base-content mb-8">
      I'm a frontend developer based in Hamburg, passionate about art, design, and everything related to making things pretty. I work part-time at a design agency where I handle the digital side of design for our clients, bringing their visions to life through beautifully coded websites and apps that align with their corporate identity. In addition to my agency work, I also take on freelance projects, helping small businesses and individuals create stunning digital experiences.
    </p>
    <p className="text-xl text-base-content mb-8">
      When I'm not coding, you'll find me in my art studio or enjoying time in the garden. I have a deep love for the outdoors and cherish moments spent camping with my kids.
    </p>
    <div className="mt-12">
      <a href="/projects" className="btn btn-primary mr-4">View My Projects</a>
      <a href="/contact" className="btn btn-secondary">Get in Touch</a>
    </div>
  </div>
</div>
  );
};

function App() {

  return (
    <Router>
      <div className="app">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-xl">mitsch01</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/">Home</Link></li>
              <li>
                <details>
                  <summary>Pages</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li><Link to="/prices">Prices</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;