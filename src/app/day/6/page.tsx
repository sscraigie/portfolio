import React from "react";

import Header from "./components/Header";
import SideProfile from "./components/SideProfile";
import { PinnedSection } from "./components/PinnedSection";
import { Footer } from "./components/Footer";

// Border: border-[#7e8590]
// Icon: fill-[#7e8590]
// Button Border: border-[#31363d]

//subtext: text-[#747b85]
const Github = () => {
  return (
    <div className="flex h-screen flex-col bg-[#0e1117]">
      <Header />
      <div className="flex h-96">
        <SideProfile />
        <div className="w-full p-2">
          <PinnedSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Github;
