"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  return (
    <div className="justify-aroun flex w-full items-center py-10">
      <div className="flex w-full items-center justify-center">
        <h1 className="text text-5xl">My Portfolio</h1>
      </div>
      <div className="w-full justify-center py-10">
        <Spline scene="https://prod.spline.design/Td1dXQyEuR-cNJOO/scene.splinecode" />
      </div>
    </div>
  );
};
export default Hero;
