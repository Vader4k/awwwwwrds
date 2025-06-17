import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Message from "./sections/Message";

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Message />
      <div className="h-dvh bg-mid-brown"/>
    </main>
  );
};

export default App;
