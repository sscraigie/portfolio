"use client";
import React from "react";
import Motion from "@/components/Motion";
import Image from "next/image";
import { HeroImage } from "./HeroImage";

export const Hero = () => {
  return (
    <div className="w-full px-2 py-7">
      <Motion
        yChange={25}
        delay={0.1}
        className="flex w-full justify-between pt-16"
      >
        <div className="hidden items-center justify-center p-5 sm:flex  sm:w-1/2 ">
          <Image
            className="duration-200 hover:-rotate-12"
            src="/d3/hero.jpg"
            alt="hero"
            width={500}
            height={300}
            layout="intrinsic"
          />
        </div>
        <div className="w-full gap-10 text-center text-2xl sm:w-1/2">
          <h1 className=" m-1 text-4xl font-extrabold text-red-300 md:text-6xl">
            Become a
          </h1>
          <h1 className="m-1 text-4xl font-extrabold text-blue-600 md:text-6xl lg:whitespace-nowrap">
            Better Developer
          </h1>
          <h1 className="m-1 text-4xl font-extrabold text-red-300 md:text-6xl">
            in 100 Days
          </h1>
          <p className=" text-sm font-light text-blue-400 md:text-lg">
            Daily Dev is a series of
            <b className="text-blue-600"> Design Challenges</b>
            <br /> and
            <b className="text-blue-600"> Surprise Rewards</b> sent out
            everyday.
          </p>
          <a href="https://www.dailyui.co/#signup">
            <button className=" text-bold rounded-md border-none bg-blue-600 p-3 px-7 text-center font-extrabold text-white md:text-lg">
              Get Started for Free
            </button>
          </a>
          <p className="text-sm text-blue-200">
            100% FREE. No Spam. No Affiliate Links. No data sharing.
          </p>
        </div>
      </Motion>
    </div>
  );
};
