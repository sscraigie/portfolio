"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteConfig } from "@/config/site";
import cn from "classnames"
import { Icons } from "@/components/Icons";
import { Badge } from "@/components/ui/badge";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link
        href="/"
        className="mr-6 flex appearance-none items-center space-x-2 no-underline"
      >
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          href="/projects"
          className={cn(
            "no-underline transition-colors hover:text-foreground/80",
            pathname === "/" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Projects
        </Link>
        <Link
          href="/coming-soon"
          className={cn(
            "no-underline transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Docs
        </Link>
        <Link
          href="/blog"
          className={cn(
            "no-underline transition-colors hover:text-foreground/80",
            pathname === "/blog" ? "text-foreground" : "text-foreground/60",
          )}
        >
          Blog
        </Link>
      </nav>
    </div>
  );
}
