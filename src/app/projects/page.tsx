import React from "react";
import { InfoCard } from "../day/45/page";
import { HeroParallaxSection } from "./components/HeroParallax";

const DAYS = [
  { day: 1, title: "Sign Up" },
  { day: 2, title: "Checkout" },
  { day: 3, title: "Landing Page" },
  { day: 4, title: "Calculator" },
  { day: 5, title: "App Icon" },
  { day: 6, title: "User Profile" },
  { day: 8, title: "404 Page" },
  { day: 11, title: "Flash Message" },
  { day: 15, title: "Toggle" },
  { day: 45, title: "InfoCard" },
];

const Portfolio = () => {
  return (
    <div className="w-full">
      <HeroParallaxSection />
      <div className=" flex h-full w-full flex-col justify-center">
        <div className="m-0 w-full max-w-5xl ">
          <h1 className="m-0 p-10">Portfolio</h1>
          <div className="flex max-w-4xl flex-wrap justify-center gap-5">
            {DAYS.map((day) => (
              <InfoCard key={day.day} day={day.day} title={day.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;