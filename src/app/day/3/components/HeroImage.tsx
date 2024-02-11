"use client";
import React from "react";
import Motion from "@/components/Motion";
import Image from "next/image";

export const HeroImage = () => {
  return (
    <Motion xChange={-100}>
      <Image src="/d3/hero.jpg" alt="hero" width={500} height={500} />
    </Motion>
  );
};
