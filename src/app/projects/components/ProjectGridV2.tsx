"use client";

import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  href: string;
  image?: string;
  content?: string;
};

/**
 * NOTE: This is a rewrite of `ProjectGrid.tsx` (the `ExpandableCard` component).
 * It lives alongside the original so the two can be compared/toggled from
 * `page.tsx` before the old one is removed.
 */
export function ProjectGridV2() {
  const [active, setActive] = useState<Project | null>(null);
  const id = useId();
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const openProject = (project: Project, trigger: HTMLElement | null) => {
    lastFocusedRef.current = trigger;
    setActive(project);
  };

  const closeProject = () => {
    setActive(null);
    lastFocusedRef.current?.focus();
  };

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeProject();
    }

    document.body.style.overflow = active ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    if (active) closeButtonRef.current?.focus();
  }, [active]);

  useOutsideClick(modalRef, closeProject);

  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 sm:py-20">
        <h2 className="mb-10 text-4xl font-bold sm:mb-14 sm:text-5xl">
          Projects
        </h2>

        {/* Two separate AnimatePresence blocks (rather than one with a
        Fragment) so each motion element's `exit` animation is detected and
        awaited correctly before unmounting. */}
        <AnimatePresence>
          {active && (
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 h-full w-full bg-black/60 backdrop-blur-sm"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active && (
            <div
              key="modal"
              className="fixed inset-0 z-50 flex items-center justify-center sm:p-4"
            >
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`project-title-${id}`}
                className="relative flex h-full w-full flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:h-fit sm:max-h-[88vh] sm:w-full sm:max-w-lg sm:rounded-2xl sm:border sm:border-black/10 sm:dark:border-white/10"
              >
                <button
                  ref={closeButtonRef}
                  onClick={closeProject}
                  aria-label="Close project details"
                  className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X className="h-5 w-5" />
                </button>

                {active.image && (
                  <motion.div
                    layoutId={`image-${active.title}-${id}`}
                    className="relative h-56 w-full flex-shrink-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500 sm:h-72"
                  >
                    <Image
                      priority
                      fill
                      src={active.image}
                      alt={active.title}
                      sizes="(max-width: 640px) 100vw, 32rem"
                      className="object-cover object-top"
                    />
                  </motion.div>
                )}

                <div className="flex flex-1 flex-col overflow-y-auto p-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        id={`project-title-${id}`}
                        className="text-xl font-bold text-neutral-800 dark:text-neutral-100"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.title}-${id}`}
                        className="mt-1 text-neutral-500 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>
                  </div>

                  {active.content && (
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15, duration: 0.2 }}
                      className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                    >
                      {active.content}
                    </motion.p>
                  )}

                  <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    href={`https://${active.href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
                  >
                    Visit site
                    <ArrowUpRight className="h-4 w-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              id={id}
              onOpen={(trigger) => openProject(project, trigger)}
            />
          ))}
        </div>
      </section>
    </MotionConfig>
  );
}

function ProjectCard({
  project,
  id,
  onOpen,
}: {
  project: Project;
  id: string;
  onOpen: (trigger: HTMLElement | null) => void;
}) {
  return (
    <div className="group relative">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-blue-500 opacity-0 blur-md transition-opacity duration-500 group-focus-within:opacity-70 group-hover:opacity-70"
      />
      <div
        role="button"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        onClick={(e) => onOpen(e.currentTarget)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onOpen(e.currentTarget);
          }
        }}
        className={cn(
          "relative z-10 cursor-pointer rounded-2xl outline-none transition-transform duration-300 ease-out focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 active:scale-[0.98]",
          "group-hover:-translate-y-1.5",
        )}
      >
        <motion.div
          layoutId={`card-${project.title}-${id}`}
          className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-2xl group-hover:shadow-black/10 dark:border-white/10 dark:bg-neutral-900 dark:group-hover:shadow-black/40"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            {project.image && (
              <motion.div
                layoutId={`image-${project.title}-${id}`}
                className="absolute inset-0"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </motion.div>
            )}
            <div className="pointer-events-auto absolute inset-0 flex items-end bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <a
                href={`https://${project.href}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1 p-4 text-sm font-semibold text-white"
              >
                View website
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="fex-col flex flex-1 gap-1 p-5">
            <motion.h3
              layoutId={`title-${project.title}-${id}`}
              className="text-base font-bold text-neutral-800 dark:text-neutral-100"
            >
              {project.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${project.title}-${id}`}
              className="text-sm text-neutral-500 dark:text-neutral-400"
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const PROJECTS: Project[] = [
  {
    title: "Daily Dev",
    description: "100 days developer challenge",
    href: "dailyui.spencercraigie.com",
    image: "/projects/daily-dev.png",
    content:
      "A 100-day challenge to design, build, and ship one small project every day. Ranging from quick UI experiments to full-stack tools. Each entry was completed within 24 hours, favoring consistency and iteration over polish, as a daily rep for sharpening front-end and full-stack skills.",
  },
  {
    title: "Harvard Classics",
    description: "Reading the Harvard Classics in 365 days",
    href: "harvard-classic.com",
    image: "/projects/harvard.png",
    content:
      "The Harvard Classics—A 365-day reading challenge to read the entire collection by Dr. Charles W. Eliot. I tracked progress, wrote daily reflections, and built summaries for each work to make these foundational texts easier to revisit and share.",
  },
  {
    title: "Speed Square",
    description: "A 2D rubik's cube game",
    href: "speedsquare.spencercraigie.com",
    image: "/projects/speedSquare.png",
    content:
      "A browser-based puzzle game inspired by the classic Rubik's Cube, reimagined in 2D. Players rotate colored tiles to match patterns and solve increasingly complex configurations. Built with smooth animations and intuitive controls to capture the satisfying challenge of spatial puzzle-solving in a simplified format.",
  },
  {
    title: "Todo App",
    description: "A simple todo app",
    href: "todo.spencercraigie.com",
    image: "/projects/todo.png",
  },
  {
    title: "DVD Screen Saver",
    description:
      "Simple DVD loading screen using vanilla HTML and Marquee element",
    href: "dvd.spencercraigie.com",
    image: "/projects/dvd.png",
  },
  {
    title: "Ask Spencer",
    description:
      "A ChatGPT clone that was built in an afternoon and a locally running LLM model on my home server",
    href: "ask.spencercraigie.com",
  },
];
