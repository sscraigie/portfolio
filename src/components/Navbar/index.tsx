import Link from "next/link";

import { siteConfig } from "@/config/site";
import cn from "classnames"
import { CommandMenu } from "./components/CommandMenu";
import { Icons } from "@/components/Icons";
import { MainNav } from "./components/MainNav";
import { MobileNav } from "./components/MobileNav";
import { ModeToggle } from "./components/ModeToggle";
import { buttonVariants } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className=" sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "px-0",
                )}
              >
                <Icons.gitHub className="h-5 w-5 fill-current" />
                <span className="sr-only">Github</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "px-0",
                )}
              >
                <Icons.linkedin className="h-3 w-3 fill-current" />
                <span className="sr-only">Linkedin</span>
              </div>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
