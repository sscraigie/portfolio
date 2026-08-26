"use client";
import React from "react";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="flex max-w-7xl w-full flex-col items-center justify-around py-10 md:flex-row">
      <div className="py-19 top-0 mx-auto w-full max-w-7xl px-20 md:py-40">
        <h1 className="text-4xl font-bold dark:text-white md:text-7xl">
          Hello 👋 <br /> I&apos;m Spencer
        </h1>
        <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
          This is my full stack developer portfolio.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-neutral-400 dark:border-neutral-600"
          >
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button asChild size="lg" variant="ghost" className="group">
            <Link href="/contact">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="h-96 w-full justify-center ">
        <Spline
          className=""
          scene="https://prod.spline.design/Td1dXQyEuR-cNJOO/scene.splinecode"
        />
      </div>
    </div>
  );
};
export default Hero;
