// import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProviderClient } from "@/components/ThemeProviderClient";
import { SiteHeader } from "@/components/Navbar/index";
import { PostHogProvider } from "./providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spencer Craigie",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"flex h-screen flex-col " + inter.className}>
        <ThemeProviderClient
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PostHogProvider>
            <div>
              {/* <Navbar /> */}
              <SiteHeader />
              <div className="flex flex-1 flex-col">{children}</div>
            </div>
          </PostHogProvider>
        </ThemeProviderClient>
      </body>
    </html>
  );
}
