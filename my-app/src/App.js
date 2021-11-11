import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route exact path="/" element={Home} />
        <Route exact path="/about" element={About} />
        <Route exact path="/blog" element={Blog} />
        <Route path="/contact" element={Contact} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;