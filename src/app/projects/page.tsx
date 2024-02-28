import React from "react";
import Card from "./components/Card";
import { HeroParallaxSection } from "./components/HeroParallax";

export type project = {
  title: string;
  description: string;
  href: string;
  image?: string;
};

const PROJECTS: project[] = [
  {
    title: "Daily Dev",
    description: "100 days developer challenge",
    href: "dailyui.spencercraigie.com",
    image: "/projects/daily-dev.png",
  },
  {
    title: "Harvard Classics",
    description: "Reading the Harvard Classics in 365 days",
    href: "harvardclassics.spencercraigie.com",
    image: "/projects/harvard.png",
  },
  {
    title: "Speed Square",
    description: "A 2D rubik's cube game",
    href: "speedsquare.spencercraigie.com",
    image: "/projects/speedSquare.png",
  },
  {
    title: "Ask Spencer",
    description:
      "A ChatGPT clone that was built in an afternoon and a locally running LLM model on my home server",
    href: "ask.spencercraigie.com",
  },
];
const Portfolio = () => {
  return (
    <div className="w-full">
      <HeroParallaxSection />
      <div className="flex w-full justify-center">
        <div className="flex max-w-7xl flex-col ">
          <h1 className="p-10 text-3xl">Portfolio</h1>
          <div className="flex w-full flex-wrap items-center justify-center ">
            {PROJECTS.map((project, index) => (
              <Card key={index} project={project} />
              // <InfoCard key={day.day} day={day.day} title={day.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
