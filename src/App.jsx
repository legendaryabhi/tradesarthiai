import React from "react";
import "./styles/global.css";

// Importing components (placeholders for now)
import Header from "./components/Header";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import HowItWorks from "./components/HowItWorks";
import Demo from "./components/Demo";
import Features from "./components/Features";
import CompetitiveAdvantage from "./components/CompetitiveAdvantage";
import EarlyAccess from "./components/EarlyAccess";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <div id="how-it-works"><HowItWorks /></div>
      <div id="demo"><Demo /></div>
      <div id="features"><Features /></div>
      <CompetitiveAdvantage />
      <div id="early-access"><EarlyAccess /></div>
      <Footer />
    </div>
  );
}

export default App;
