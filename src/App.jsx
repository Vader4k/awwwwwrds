import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Message from "./sections/Message";
import Flavor from "./sections/Flavor";
import { useGSAP } from "@gsap/react";
import Nutrition from "./sections/Nutrition";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavor />
          <Nutrition />
          <div className="h-dvh bg-mid-brown" />
        </div>
      </div>
    </main>
  );
};

export default App;
