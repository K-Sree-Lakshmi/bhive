import React from "react";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero Section/hero";
import "./App.css";
import StaticCard from "./components/Content/staticCard";
import Footer from "./components/Footer/footer";
import CopyRight from "./components/Footer/copyRight";
import DynamicOverViewCard from "./components/Content/dynamicCard";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Hero />
      <div className="body">
        <StaticCard />
        <DynamicOverViewCard />
        <Footer />
      </div>
      <CopyRight />
    </Provider>
  );
}

export default App;
