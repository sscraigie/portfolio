"use client"; //for framer motion
import React from "react";
import { Hero } from "./components/Hero";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Motion from "@/components/Motion";
import Logos from "./components/Logos";
import Testimonials from "./components/Testimonials";
import UserFlow from "./components/UserFlow";
import { SignUp } from "./components/SignUp";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="flex justify-center">
      <div className="max flex max-w-7xl flex-col items-center gap-20  p-2">
        <Hero />
        <KeyboardArrowDownIcon className="gap-5 text-7xl text-blue-600 hover:text-blue-800" />
        <Motion yChange={25} className="flex flex-col items-center">
          <h1 className=" m-1 text-4xl font-extrabold text-blue-600 lg:text-6xl">
            Join Over 351,208+
          </h1>
          <h1 className="m-1 text-4xl font-extrabold text-red-300 lg:text-6xl">
            of the World&apos;s Best
          </h1>
          <h1 className="m-1 text-4xl font-extrabold text-blue-600 lg:text-6xl">
            Full-Stack Developers
          </h1>
        </Motion>
        <Logos />
        <Motion yChange={25}>
          <h1 className=" gap-5 p-5 text-center text-4xl text-blue-600 lg:text-6xl">
            And See What the Developer
            <br />
            Community is Saying
          </h1>
        </Motion>
        <Testimonials />
        <Motion>
          <h1 className="text-center text-4xl text-red-300 lg:text-6xl">
            Learn to{" "}
            <span className="text-blue-600">
              Improve Your Skills
              <br /> &{" "}
            </span>
            Build Your Portfolio
          </h1>
        </Motion>
        <UserFlow />
        <SignUp />
        <Footer />
      </div>
    </div>
  );
}
