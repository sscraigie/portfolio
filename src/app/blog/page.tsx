import React from "react";

export default function SpotlightPreview() {
  return (
    <div className="bg-grid-white/[0.02] bg-blue[0.96] relative flex h-full w-full overflow-hidden rounded-md antialiased md:items-center md:justify-center">
      <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          {/* Spotlight <br /> is the new trend. */}
          Page Coming <br />
          Soon
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300"></p>
      </div>
    </div>
  );
}
