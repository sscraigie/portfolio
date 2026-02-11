"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  projects,
}: {
  projects: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig,
  );
  return (
    <div
      ref={ref}
      className="relative flex h-[200vh]  flex-col self-auto overflow-hidden py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-20 space-x-reverse">
          {firstRow.map((project) => (
            <ProductCard
              product={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex  flex-row space-x-20 ">
          {secondRow.map((project) => (
            <ProductCard
              product={project}
              translate={translateXReverse}
              key={project.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-20 space-x-reverse">
          {thirdRow.map((project) => (
            <ProductCard
              product={project}
              translate={translateX}
              key={project.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative left-0 top-0 mx-auto w-full max-w-7xl px-10 h-[50vh] py-20 md:py-40">
      <h1 className="text-6xl font-bold dark:text-white md:text-7xl">
        My Projects
      </h1>
      <p className="mt-8 max-w-2xl text-xl dark:text-neutral-200 md:text-xl">
        Here are some of the projects I have worked on over the years. I have
        used a variety of technologies and tools to make them including React,
        Next.js, Tailwind CSS, and many more.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product relative h-96 w-[30rem] flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          alt={product.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 group-hover/product:opacity-80"></div>
      <h2 className="absolute bottom-4 left-4 text-white opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  );
};

export function HeroParallaxSection() {
  return <HeroParallax projects={projects} />;
}
export const projects = [
  //{
  //  title: "",
  //  link: "https://cursor.so",
  //  thumbnail:
  //    "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  //},
  {
    title: "Daily Dev",
    link: "https://dailyui.spencercraigie.com",
    thumbnail: "/projects/daily-dev.png",
  },
  {
    title: "Harvard Classics",
    link: "https://harvard-classic.vercel.app",
    thumbnail: "/projects/harvard.png",
  },
  //{
  //  title: "Editorially",
  //  link: "https://editorially.org",
  //  thumbnail:
  //    "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  //},
  //{
  //  title: "Editrix AI",
  //  link: "https://editrix.ai",
  //  thumbnail:
  //    "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  //},
  //{
  //  title: "Pixel Perfect",
  //  link: "https://app.pixelperfect.quest",
  //  thumbnail:
  //    "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  //},
  {
    title: "DVD Screen Saver",
    link: "https://dvd.spencercraigie.com",
    thumbnail:
      "/projects/dvd.png",
  },
  {
    title: "Speed Square",
    link: "https://speedsquare.spencercraigie.com",
    thumbnail: "/projects/speedSquare.png",
  },
  {
    title: "SkillFit",
    link: "https://www.skillfit.me",
    thumbnail: "/projects/skillfit.png",
  },
  {
    title: "Checkout",
    link: "https://dailyui.spencercraigie.com/day/2",
    thumbnail:
      "/projects/checkout.png",
  },
  //{
  //  title: "Renderwork Studio",
  //  link: "https://renderwork.studio",
  //  thumbnail:
  //    "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  //},
  {
    title: "Sign Up",
    link: "https://dailyui.spencercraigie.com/day/1",
    thumbnail:
      "/projects/sign-up.png",
  },
  {
    title: "Calculator",
    link: "https://dailyui.spencercraigie.com/day/4",
    thumbnail:
      "/projects/calculator.png",
  },
  {
    title: "Github Clone",
    link: "https://dailyui.spencercraigie.com/day/6",
    thumbnail:
      "/projects/github-clone.png",
  },
  //{
  //  title: "Harvard Classic V1",
  //  link: "",
  //  thumbnail:
  //    "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  //},
];
