export type Project = {
  title: string;
  description: string;
  href: string;
  image?: string;
  content?: string;
};

export const PROJECTS: Project[] = [
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
