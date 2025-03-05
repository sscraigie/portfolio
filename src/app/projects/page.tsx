import React from "react";
import Card from "./components/Card";
import { HeroParallaxSection } from "./components/HeroParallax";
import { ExpandableCard } from "./components/ProjectGrid";

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
    href: "harvard-classic.vercel.app",
    image: "/projects/harvard.png",
  },
  {
    title: "Speed Square",
    description: "A 2D rubik's cube game",
    href: "speedsquare.spencercraigie.com",
    image: "/projects/speedSquare.png",
  },
  {
    title: "Todo App",
    description: "A simple todo app",
    href: "todo.spencercraigie.com",
    image: "/projects/todo.png",
  },
  {
    title: "DVD Screen Saver",
    description: "Simple DVD loading screen using vanilla HTML and Marquee element",
    href: "dvd.spencercraigie.com",
    image: "/projects/dvd.png"
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
      <ExpandableCard />
      <div className="flex w-full justify-center">
        {/* <div className="flex max-w-7xl flex-col ">
          <h1 className=" text-3xl font-bold">Portfolio</h1>
       <div className="flex w-full flex-wrap items-center justify-center ">   
       <div className="p-2 py-10 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-y-16 gap-4">
            {PROJECTS.map((project, index) => (
              <Card key={index} project={project} />
              // <InfoCard key={day.day} day={day.day} title={day.title} />
            ))}
          </div>
        </div>
      */}
      </div>
    </div>
  );
};

export default Portfolio;
