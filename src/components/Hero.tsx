"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  return (
    <div className="flex w-full justify-around">
      <div className="w-full">
        <h1>My Portfolio</h1>
      </div>
      <div className="w-full">
        <Spline scene="https://prod.spline.design/Td1dXQyEuR-cNJOO/scene.splinecode" />
      </div>
    </div>
  );
};
