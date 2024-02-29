"use client";
import React from "react";
import Spline from "@splinetool/react-spline";

export const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-around py-10 md:flex-row">
      <div className="py-19 top-0 mx-auto w-full max-w-7xl px-20 md:py-40">
        <h1 className="text-4xl font-bold dark:text-white md:text-7xl">
          Hello 👋 <br /> I&apos;m Spencer
        </h1>
        <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
          This is my full stack developer portfolio.
        </p>
      </div>
      <div className="w-full justify-center ">
        <Spline
          className=""
          scene="https://prod.spline.design/Td1dXQyEuR-cNJOO/scene.splinecode"
        />
      </div>
    </div>
  );
};
export default Hero;
