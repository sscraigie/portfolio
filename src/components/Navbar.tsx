"use client";
// import React from "react";
// import Link from "next/link";

// export const Navbar = () => {
//   return (
//     <nav className="flex  w-full justify-between shadow">
//       <Link href="/" className="no-underline">
//         <h1 className="m-0 p-3 px-10 font-sans text-2xl font-bold text-blue-600 no-underline md:text-3xl">
//           Daily Dev
//         </h1>
//       </Link>

//       <Link
//         href="/portfolio"
//         className="m-0 h-full px-10 pt-5 align-text-bottom font-sans text-sm text-gray-600 no-underline md:text-base"
//       >
//         Portfolio
//       </Link>
//     </nav>
//   );
// };

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils";
import { Mode } from "@mui/icons-material";
import { ModeToggle } from "./ModeToggle";
// import { Badge } from "@/registry/new-york/ui/badge"

export function Navbar() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        {/* <Icons.logo className="h-6 w-6" /> */}
        <span>☕</span>
        <span className="hidden font-bold sm:inline-block">
          <b>Spencer Craigie</b>
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Components
        </Link>
        <Link
          href="/themes"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/themes")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Themes
        </Link>
        <Link
          href="/examples"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/examples")
              ? "text-foreground"
              : "text-foreground/60",
          )}
        >
          Examples
        </Link>
        <Link
          href="https://github.com/sscraigie"
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block",
          )}
        >
          GitHub
        </Link>
        <ModeToggle />
      </nav>
    </div>
  );
}
