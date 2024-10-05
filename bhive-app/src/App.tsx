import React from "react";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero Section/hero";
import "./App.css";
import StaticCard from "./components/Content/staticCard";

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="body">
        <StaticCard/>
      </div>
    </div>
  );
}

export default App;
